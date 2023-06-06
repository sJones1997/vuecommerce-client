import { mount  } from "@vue/test-utils"
import LoginForm from "@/components/LoginForm.vue"
import LoginConstants from "@/constants/loginConstants"
import store from "@/store"


const loginComponentWrapper = mount(LoginForm, {
    global: {
        plugins: [store]
    }
})

describe("LoginForm", () => {

    test("Form validation fails", async () => {

        //Given
        const invalidEmail = "testing";
        const weakPassword = "123456"
        loginComponentWrapper.find("#login-email").setValue(invalidEmail);
        loginComponentWrapper.find("#login-password").setValue(weakPassword);

        //When
        const form = loginComponentWrapper.find("form");
        await form.trigger("submit");

        //Then
        expect(loginComponentWrapper.find("#email-error").text()).toEqual(LoginConstants.emailFormError.errorMsg);
        expect(loginComponentWrapper.find("#password-error").text()).toContain(LoginConstants.passwordFormError.errorMsg);

    })


    test("Form validation passes", async () => {

        //Given
        const invalidEmail = "realemail@gmail.com";
        const weakPassword = "=y4C]cS2Hc]@=M_q"
        loginComponentWrapper.find("#login-email").setValue(invalidEmail);
        loginComponentWrapper.find("#login-password").setValue(weakPassword);

        //When
        const form = loginComponentWrapper.find("form");
        await form.trigger("submit");

        //Then
        expect(loginComponentWrapper.find("#email-error").exists()).toBeFalsy();
        expect(loginComponentWrapper.find("#password-error").exists()).toBeFalsy();

    })



})