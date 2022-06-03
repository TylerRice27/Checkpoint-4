import { todosService } from "../Services/TodosService.js";
import { Pop } from "../Utils/Pop.js"




export class TodosController {
    constructor() {




    }


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


}