const DEFAULT_URL = 'http://127.0.0.1:8000'
const queryString = require('query-string')

class Api {
    get(path, params){
        path = params ? `${DEFAULT_URL}/${path}?${queryString.stringify(params, { arrayFormat: 'comma' })}` : `${DEFAULT_URL}/${path}`
        return this.request(path, {headers: this.headers}, 'GET')
    }

    post(path, body){
        return(this.request(path, body, "POST"))
    }

    patch(path, body){
        return(this.request(path, body, "PATCH"))
    }

    delete(path, body){
        return(this.request(path, body, "DELETE"))
    }
    
    request(path, body, method){
        return this.handleResponse(fetch(path, body, method))
    }

    fetch(path, body, method){
        let headers
        return fetch(`${DEFAULT_URL}/${path}`, {
          method: method,
          headers: headers,
          body: body,
          mode: 'no-cors'
        });
    }

    async handleResponse(request){
        try{
            return await request
        }
        catch(e){
            console.log(e)
        }    
    }

    headers() {
        let _headers = { "Content-Type": "application/json", 'Access-Control-Allow-Origin': DEFAULT_URL}
        // if (this.auth.token) _headers["Authorization"] = `Token ${this.auth.token}`
        return _headers
    }
}

export default new Api()