import store from '../../index'
import api from '../../api'

export default class EssaysAction{
    static async find(params){
        let response = await api.get('essay.json', params)
        if (response.ok){
            let data = await response.json()
            store.dispatch({
                type: "ESSAYS_INDEX",
                payload: data
            })
            console.log(data)
        }
        else console.log('err')
    }

    static async create(data){
        //api delete
        const formData = new FormData()
        
        for(let i = 0; i++; i < data.length){
            formData.append(i, data[i])
        }

        let response = await api.post('posts', formData)
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