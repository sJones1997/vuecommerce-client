<template>
    <div>
        <form
            @submit="submitForm">
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
                v-model="email"
                required>
            </div>
            <div>
                <input 
                type="password" 
                class="input-field" 
                placeholder="Password" 
                :value="password">
            </div>
            <div>
                <input type="submit" value="Sign in">
            </div>
            <div>
                <p>New here? <router-link to="/">Create an account!</router-link></p>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useStore } from 'vuex';


const store = useStore();

const email = computed<string>({
    get(): string { return store.state.email },
    set(email: string): void { store.commit("setLoginEmail", email) }
})

const password = computed<string>({
    get(): string { return store.state.password},
    set(password: string) { store.commit("setLoginPassword", password) }
})

const errors = ref<string[]>([])

const validateEmail = (email: string) => {
    //eslint-disable-next-line
    const pattern = new RegExp("/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/", "g");
    if (pattern.test(email)) {
        return true;
    }
    return false;
}

const validatePassword = (password: string): boolean => {

    const pattern = new RegExp("/^(?=.*[A-Z])(?=.*d)(?=.*[!@#$%^&*])/");
    const passwordValidation = password.length > 8 && pattern.test(password)

    if(passwordValidation){
        return true;
    }
    
    return false;

}

const submitForm = () => {

    if(!validateEmail(email.value)){
        errors.value.push("Please ensure that you have entered a valid email address.");
    }

    if(!validatePassword(password.value)){
        errors.value.push("Please ensure your password is at least 8 characters long, contains at least one capital letter and special character.")
    }

    if(errors.value.length === 0){
        // store.commit("loginModule/setDetails", {email, password})
    }

}

</script>
<style scoped>

form {
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

form > *{
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

form input[type=submit]{
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

</style>