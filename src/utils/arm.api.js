class ARMApi {

    static API_URL = "http://90.189.132.25/";
    static AUTH_PREFIX = "api/v1/auth";
    static AUTH_URL = ARMApi.API_URL + ARMApi.AUTH_PREFIX;
    static fetchHeaders = {
        'Accept': '*/*',
        'Content-Type': 'application/x-www-form-urlencoded'
    };

    static jsonToFormData(json) {
        return "data=" + JSON.stringify(json);
    }

    static login(login, password) {
        const json = {
            Login: login,
            Password: password
        };

        return this.fetchAPI(ARMApi.AUTH_URL, json);
    }

    static fetchAPI(url, json) {
        return fetch(ARMApi.AUTH_URL, {
            headers: ARMApi.fetchHeaders,
            method: "POST",
            body: ARMApi.jsonToFormData(json)
        })
            .then(value => value.json())
            .then(value => {
                if (value.Answer !== 'Success') {
                   return Promise.reject(value);
                }
                return value;
            })
    }
}

export default ARMApi;