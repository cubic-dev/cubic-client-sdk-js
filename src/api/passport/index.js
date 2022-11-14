import createAxiosClient from "../base";
import CubicApiClient from "../base";

export default class PassportClient {
    constructor(apiToken) {
        this.axios = createAxiosClient(apiToken)
    }

    UserRegister() {
        this.axios.post(
            url = "/register",
            data = {

            }
        )
    }
}