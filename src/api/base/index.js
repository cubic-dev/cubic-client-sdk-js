import axios from "axios"

export default function createAxiosClient(apiToken, baseURL = "http://127.0.0.1:8080/", timeout = '1000') {
    return axios.create({
        baseURL: baseURL,
        timeout: timeout,
        headers: {
            'X-APP-TOKEN': apiToken
        }
    })
}