class ARMApi {

    static API_URL = "http://90.189.132.25/";
    static AUTH_PREFIX = "api/v1/auth";
    static CHAT_PREFIX = "api/v1/chat";
    static AUTH_URL = ARMApi.API_URL + ARMApi.AUTH_PREFIX;
    static CHAT_URL = ARMApi.API_URL + ARMApi.CHAT_PREFIX;
    static fetchHeaders = {
        'Accept': '*/*',
        'Content-Type': 'application/x-www-form-urlencoded'
    };

    static jsonToFormData(json) {
        return "data=" + JSON.stringify(json);
    }

    static jsonToGetParams(json) {
        let result = '?';
        Object.keys(json).forEach((key, index, orig) => {
            const value = json[key];
            result += `${key}=${value}`;
            if (index < orig.length - 1) {
                result += '&';
            }
        });
        return result;
    }

    static login(login, password) {
        const json = {
            Login: login,
            Password: password
        };

        return this.fetchAPIPost(ARMApi.AUTH_URL, json);
    }

    static getProfile(session) {
        return this.fetchAPIGet(ARMApi.AUTH_URL, ARMApi.jsonToGetParams({Session: session}));
    }

    static getChats(session) {
        return this.fetchAPIGet(ARMApi.CHAT_URL, ARMApi.jsonToGetParams({Session: session}))
    }

    static fetchAPIGet(url, params) {
        return fetch(url + params, {
            headers: ARMApi.fetchHeaders,
            method: "GET"
        })
            .then(value => value.json())
            .then(value => {
                if (value.Answer !== 'Success') {
                    return Promise.reject(value);
                }
                return value;
            })
    }

    static fetchAPIPost(url, json) {
        return fetch(url, {
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