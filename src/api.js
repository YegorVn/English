const DEFAULT_URL = ""

class Api {
    get(path, params){
        return this.request(path, {headers: this.headers})
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
        });
    }

    async handleResponse(request){
        let response = await request

        return response
    }

    headers(){}
}

export default new Api()