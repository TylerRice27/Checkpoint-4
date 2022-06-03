export class Todo {
    constructor(data) {
        this.id = data.id
        this.completed = data.completed
        this.user = data.user
        this.description = data.description

    }



    get TodoTemplate() {
        return `
        
         <ul class=" offset-10 col-md-2 list-group d-flex justify-self-end">
      <li class="list-group-item ">
        <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
      ${this.description}
      </li>
      
      <form onsubmit="app.todosController.addToDo()">
        <input name="description" placeholder="Add a new task" type="text">
        <button class="btn btn-primary">Add a Task</button>
      </form>
    </ul>
        
        
        `
    }



    // get Template() {
    //     return `

    //      <ul class=" offset-10 col-md-2 list-group d-flex justify-self-end">
    //   <li class="list-group-item ">
    //     <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
    //     First checkbox
    //   </li>
    //   <li class="list-group-item">
    //     <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
    //     Second checkbox
    //   </li>
    //   <li class="list-group-item">
    //     <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
    //     Third checkbox
    //   </li>
    //   <li class="list-group-item">
    //     <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
    //     Fourth checkbox
    //   </li>
    //   <li class="list-group-item">
    //     <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
    //     Fifth checkbox
    //   </li>
    //   <form onsubmit="app.todosController.addToDo()">
    //     <input name="description" placeholder="Add a new task" type="text">
    //     <button class="btn btn-primary">Add a Task</button>
    //   </form>
    // </ul>








    //     `
    // }
}