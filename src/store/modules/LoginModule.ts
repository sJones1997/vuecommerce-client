


export interface LoginState {
    loginForm: LoginForm,
    formErrors: FormError[]
}

interface LoginForm {
    email: string,
    password: string
}

export interface FormError {
    type: string
    errorMsg: string
}


const LoginModule = {
    state: (): LoginState =>({
        loginForm: {
            email: "",
            password: ""
        },
        formErrors: []
    }),
    mutations: {
        setLoginEmail: (state: LoginState, email: string) => {
            state.loginForm.email = email;
        },
        setLoginPassword: (state: LoginState, password: string) => {
            state.loginForm.password = password;
        },
        setFormErrors: (state: LoginState, formErrors: FormError[]) => {
            state.formErrors = formErrors;
        }

    },
    getters: {
        getLoginEmail(state: LoginState){
            return state.loginForm.email
        },
        getLoginPassword(state: LoginState){
            return state.loginForm.password
        },
        getFormErrors(state: LoginState){
            return state.formErrors;
        }
    }
}

export default LoginModule