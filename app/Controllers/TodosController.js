import { ProxyState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";
import { Pop } from "../Utils/Pop.js"


function _drawToDos() {
    let todos = ProxyState.todos
    let template = ''
    let completedone = 0
    let taskNumber = todos
    todos.forEach(t => {
        template += t.TodoTemplate
        if (t.completed) {
            completedone++
        }


        document.getElementById("todo-list").innerHTML = template
        document.getElementById("completed-count").innerText = completedone + taskNumber
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
        try {

            let confirmAction = confirm("Are you sure you want to delete?");
            if (confirmAction) {


                await todosService.deleteTodo(id)
            } else {

                alert("Action canceled");
            }

        }
        catch (error) {
            console.error(error)
            Pop.toast(error.message, 'error')
        }


    }


    async completedTodo(id) {


        await todosService.completedTodo(id)

    }

    // seeTodoList() {

    //     // this code is useless right now
    //     // document.getElementById("todo-list").innerHTML = ProxyState.todos
    // }


}