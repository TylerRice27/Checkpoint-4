import { ProxyState } from "../AppState.js"
import { Todo } from "../Models/Todos.js";
import { sandboxApi } from "./AxiosService.js";


class TodosService {


    async addToDo(newToDo) {
        const res = await sandboxApi.post('Tyler/todos', newToDo)
        console.log("add a todo item", res.data);
        ProxyState.todos = [...ProxyState.todos, new Todo(res.data)]
    }


    async getTodo() {
        const res = await sandboxApi.get('Tyler/todos')
        console.log('get todo items', res.data);
        ProxyState.todos = res.data.map(t => new Todo(t))

    }


    async deleteTodo(id) {
        const res = await sandboxApi.delete('Tyler/todos/:todoId')
        console.log("delete todo", res.data);
        ProxyState.todos = ProxyState.todos.filter(t => t.id != id)
    }

    // this method is unfished but it is supposed to tell
    // find the id and help with keeping the checkbox saved and 
    // help with the number at the top
    async completedTodo(id) {
        let todo = ProxyState.todos.find(t => t.id == id)
        console.log(todo);
    }


}











export const todosService = new TodosService()