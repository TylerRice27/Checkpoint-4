import { ProxyState } from "../AppState"

const sandboxApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/',
    timeout: 12000
})

class TodosService {
    async addTodo() {
        let todo = ProxyState.todo
        const res = await sandboxApi.post('', todo)
        console.log("add a todo item", res.data);
    }
}