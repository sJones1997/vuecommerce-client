<template>
    <div>
        <form
            @submit.prevent="submitForm"
            class="login-form"
            >
            <div>
                <h3>VueCommerce App</h3>
            </div>
            <div>
                <p>Welcome back!</p>
                <h1>Sign in</h1>
            </div>
            <div>
                <input 
                type="text" 
                class="input-field" 
                placeholder="Email" 
                id="login-email"
                v-model="email"
                required>
                <p 
                v-if="errorLookup('email').length" 
                class="error-text"
                id="email-error"
                >
                    {{ errorLookup('email') }}
                </p>
            </div>
            <div>
                <input 
                type="password" 
                class="input-field" 
                placeholder="Password" 
                id="login-password"
                v-model="password"
                required>
                <p 
                v-if="errorLookup('password').length" 
                class="error-text"
                id="password-error"
                >
                    {{ errorLookup('password') }}
                </p>
            </div>
            <div>
                <input 
                type="submit" 
                
                value="Sign in">
            </div>
            <div>
                <p>New here? <router-link to="/">Create an account!</router-link></p>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">

import LoginConstants from '@/constants/loginConstants';
import { FormError } from '@/store/modules/LoginModule';
import { WritableComputedRef, computed } from 'vue';
import { useStore } from 'vuex';


const store = useStore();

const email = computed<string>({
    get(): string { return store.getters.getLoginEmail },
    set(email: string): void { store.commit("setLoginEmail", email) }
})

const password = computed<string>({
    get(): string { return store.getters.getLoginPassword },
    set(password: string): void { store.commit("setLoginPassword", password) }
})

let formErrors: WritableComputedRef<FormError[]> = computed({
    get(): FormError[] { return store.getters.getFormErrors },
    set(setFormErrors: FormError[]): void { store.commit("setFormErrors", setFormErrors) }
})

const errorLookup = (lookupKey: string) : string => {
    const index = formErrors.value.findIndex(error => error.type === lookupKey)
    if(index !== -1){
        return formErrors.value[index].errorMsg
    }
    return "";
}

const validateEmail = (email: string) => {
    //eslint-disable-next-line
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (pattern.test(email)) {
        return true;
    }
    return false;
}

const validatePassword = (password: string): boolean => {

    const pattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const passwordValidation = password.length > 8 && pattern.test(password)

    if(passwordValidation){
        return true;
    }
    
    return false;

}

const submitForm = (): void => {

    let errors: FormError[] = []
    formErrors.value = errors

    if(!validateEmail(email.value)){
        errors.push(LoginConstants.emailFormError);
    }

    if(!validatePassword(password.value)){
        errors.push(LoginConstants.passwordFormError)
    }

    if(errors.length){
        formErrors.value = errors
    } else {
        console.log("submit")
    }

}

</script>
<style scoped>

.login-form {
    margin: auto;
    width:40%;
    text-align: left;
    border-radius: 15px;
    box-shadow: 0 0 5px 5px rgb(61, 61, 61, 0.1);
    background: #fff;
    position:absolute;
    top:20%;
    right:0;
    left:0;
}

.login-form  > *{
    padding: 1.5em 2em;
}

.input-field {
    height: 3.5em;
    width: 100%;
    border-radius: 5px;
    background-color: #f0f5ff;
    border: none;
    text-indent: 10px;
}

.input-field:focus {
    border: none;
    outline: none;;
}

.input-field::-webkit-input-placeholder { /* WebKit browsers */
    color:#002147;
    font-weight: 600;
}
.input-field:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color:#002147;
    font-weight: 600;
}
.input-field::-moz-placeholder { /* Mozilla Firefox 19+ */
    color:#002147;
    font-weight: 600;
}
.input-field:-ms-input-placeholder { /* Internet Explorer 10+ */
    color:#002147;
    font-weight: 600;
}

.login-form input[type=submit]{
    font-family: 'Inter', sans-serif;
    background-color:#002147;
    border-radius: 15px;
    border: none;
    padding: .75em;
    width: 25%;
    color:  #fff;
    font-weight: 600;
    font-size: 0.9em;
    cursor: pointer;
}

.error-text {
    color: #B96F6D;
    font-size: 0.8em;
    font-weight: 600;
}

</style>