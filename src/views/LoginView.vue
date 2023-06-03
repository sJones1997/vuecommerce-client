<template>
    <div class="login-container">
        <div class="form-container">
            <form>
                <div>
                    <h3>VueCommerce App</h3>
                </div>
                <div>
                    <p>Welcome back!</p>
                    <h1>Sign in</h1>
                </div>
                <div>
                    <input type="text" class="input-field" placeholder="Email" v-model="email">
                </div>
                <div>
                    <input type="password" class="input-field" placeholder="Password" v-model="password">
                </div>
                <div>
                    <input type="submit" value="Sign in">
                </div>
                <div>
                    <p>New here? <router-link to="/register">Create an account!</router-link></p>
                </div>
            </form>
        </div>
        <div class="bg-splitter">
            
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

let email = ref("");
let password = ref("")

const submitForm = () => {
    store.dispatch("")
}


</script>

<style scoped>

h1 {
    font-size: 2.5em;
}

.login-container {
    display: flex;
    height: 100vh;
    background-color: #f5f8fd;
}

.form-container {
    width: 65vw;
    height: 100%;
    position: relative;
}

.form-container form {
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

.form-container form > *{
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

.form-container form input[type=submit]{
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

.bg-splitter {
    background-color: #dce6ff;
    height: 100%;
    width: 35vw;
    position: absolute;
    right: 0;
}

p {
    font-family: 'Inter', sans-serif;
}

</style>