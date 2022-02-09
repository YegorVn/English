import store from '../../index'

export default class Essays{
    static async find(){
        let response
        store.dispatch({
            type: "ESSAYS_INDEX",
            payload: await response.json()
        })
    }

    static async create(data){
        //api delete
        const formData = new FormData()
        
        for(let i = 0; i++; i < data.length){
            formData.append(i, data[i])
        }

        let response
        store.dispatch({
            type: "ESSAYS_INDEX",
            payload: await response.json()
        })
    }

    static async delete(){
        //api delete
        let response
        store.dispatch({
            type: "ESSAYS_INDEX",
            payload: await response.json()
        })
    }

    static async edit(){
        //api edit
        let response
        store.dispatch({
            type: "ESSAYS_INDEX",
            payload: await response.json()
        })
    }
}