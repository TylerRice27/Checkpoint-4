



export class TodosController {
    constructor() {




    }


    async addTodo() {
        try {
            await addTodoService.addTodo()
        } catch (error) {

        }
    }


}