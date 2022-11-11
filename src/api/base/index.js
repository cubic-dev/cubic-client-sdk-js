import axios from "axios"

default_client_config = {
    timeout: "1000",
}

class CubicApiClient {
    constructor(apiToken, config = default_client_config) {
        this.apiToken = apiToken
        this.axios = axios.create(config)
    }
}