import { TodosController } from "./Controllers/TodosController.js";
import { ValuesController } from "./Controllers/ValuesController.js";
import { WeatherController } from "./Controllers/WeathersController.js";


class App {
  // valuesController = new ValuesController();

  todosController = new TodosController()

  weatherController = new WeatherController()



}

window["app"] = new App();
