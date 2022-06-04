import { ProxyState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";
import { Pop } from "../Utils/Pop.js"


function _drawToDos() {
    let todos = ProxyState.todos
    let template = ''
    todos.forEach(t => {
        template += t.TodoTemplate
        document.getElementById("todo-list").innerHTML = template
    })
}

export class TodosController {
    constructor() {

        ProxyState.on("todos", _drawToDos)
        _drawToDos()
        this.getTodo()
    }

    //this goes and adds them to my api when the user submits the form
    async addToDo() {
        try {
            window.event.preventDefault()
            let form = window.event.target
            console.log('form submitted', form);
            let todoData = {
                description: form.description.value,
            }
            console.log('new Task', todoData);
            await todosService.addToDo(todoData)
            // form.reset()



        } catch (error) {
            console.error(error)
            Pop.toast(error.message, "error")
        }

    }
    //this goes and gets my todos and draws them to the page
    async getTodo() {
        try {
            await todosService.getTodo()
        } catch (error) {
            console.error(error)
            Pop.toast(error.message, 'error')
        }
    }

    //this is going to be linked to a trash can icon or something
    async deleteTodo(id) {
        debugger
        try {
            await todosService.deleteTodo(id)
        } catch (error) {
            console.error(error)
            Pop.toast(error.message, 'error')
        }
    }

    seeTodoList() {
        document.getElementById("todo-list").innerHTML = ProxyState.todos
    }


}