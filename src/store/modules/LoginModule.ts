

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
    })
}