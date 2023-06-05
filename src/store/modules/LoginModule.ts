

export interface LoginState {
    loginForm: LoginForm
}

export interface LoginForm {
    email: string,
    password: string
}

const LoginModule = {
    state: (): LoginState =>({
        loginForm: {
            email: "",
            password: ""
        }
    }),
    mutations: {
        setLoginEmail: (state: LoginState, email: string) => {
            state.loginForm.email = email;
        },
        setLoginPassword: (state: LoginState, password: string) => {
            state.loginForm.password = password;
        }
    }
}

export default LoginModule