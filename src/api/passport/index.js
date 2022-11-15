import createAxiosClient from "../base";

export default class PassportClient {
    constructor(apiToken) {
        this.axios = createAxiosClient(apiToken)
    }

    UserRegister(account, onSuccess, OnFailed) {
        var call = this.axios({
            method: "post",
            url: "/register", 
            data: account
        })
        call.then((resp) => {
            onSuccess(resp)
        }).catch((resp) => {
            OnFailed(resp)
        }) 
    }
}