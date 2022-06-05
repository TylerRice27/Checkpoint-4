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

        // I have to use the dollar sign with the id because of how I digged into the 
        // API it will only take in the Id if I give the ${} unless
        // I would alias my api with a new name to dig all the way into the code
        const res = await sandboxApi.delete(`Tyler/todos/${id}`)
        console.log("delete todo", res.data);
        ProxyState.todos = ProxyState.todos.filter(t => t.id != id)


    }

    // this method is unfinished but it is supposed to
    // find the id and help with keeping the checkbox saved and 
    // help with the number at the top
    //this isnt even finding an id when I click on the box
    async completedTodo(id) {

        let todo = ProxyState.todos.find(t => t.id == id)
        console.log(todo);
        todo.completed = !todo.completed
        const res = await sandboxApi.put(todo.id, todo)
        console.log("todo mark complete", res.data);
        ProxyState.todos = ProxyState.todos
    }


}











export const todosService = new TodosService()