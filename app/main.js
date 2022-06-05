import { QuoteController } from "./Controllers/QuoteController.js";
import { TodosController } from "./Controllers/TodosController.js";
import { ValuesController } from "./Controllers/ValuesController.js";
import { WeatherController } from "./Controllers/WeathersController.js";


class App {
  // valuesController = new ValuesController();

  todosController = new TodosController()

  weatherController = new WeatherController()

  quoteController = new QuoteController()

}

window["app"] = new App();
