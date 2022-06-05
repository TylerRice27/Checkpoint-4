export class Todo {
  constructor(data) {
    this.id = data._id || data.id
    this.completed = data.completed
    this.user = data.user
    this.description = data.description


  }


  // You cant put the form into the 
  // template because then 
  // you have no area to enter anything in


  // this is where my checkbox is supposed to tell me if it is completed or not
  get TodoTemplate() {
    return `
        
       
      <li class="list-group-item ">
        <input class="form-check-input me-1" type="checkbox" ${this.completed ? 'checked' : ''} onclick"app.todosController.completedTodo(event,'${this.id}')" >
      ${this.description}
       <div class="col-2 selectable text-danger" onclick="app.todosController.deleteTodo('${this.id}')"><i class="mdi mdi-delete"></i></div>
      </li>
      
      
        
        
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