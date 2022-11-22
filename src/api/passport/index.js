import createAxiosClient from "../base";

export default class PassportClient {
    constructor(apiToken) {
        this.axios = createAxiosClient(apiToken)
    }

    UserRegister(account, onSuccess, onFailed) {
        this.axios({
            method: "post",
            url: "/register", 
            data: account
        }).then((resp) => {
            onSuccess(resp)
        }).catch((resp) => {
            onFailed(resp)
        }) 
    }

    UserLogin(account, onSuccess, onFailed) {
        this.axios({
            method: "post",
            url: "/login",
            data: account
        }).then((resp) => {
            onSuccess(resp)
        }).catch((resp) => {
            onFailed(resp)
        })
    }
}