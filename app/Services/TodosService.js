import { ProxyState } from "../AppState.js"
import { sandboxApi } from "./AxiosService.js";


class TodosService {


    async addToDo(newToDo) {
        const res = await sandboxApi.post('', newToDo)
        console.log("add a todo item", res.data);
    }
}











export const todosService = new TodosService()