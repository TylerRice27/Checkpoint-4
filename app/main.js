import { ImgController } from "./Controllers/ImageController.js";
import { QuoteController } from "./Controllers/QuoteController.js";
import { TodosController } from "./Controllers/TodosController.js";
import { ValuesController } from "./Controllers/ValuesController.js";
import { WeatherController } from "./Controllers/WeathersController.js";


class App {
  // valuesController = new ValuesController();

  todosController = new TodosController()

  weatherController = new WeatherController()

  quoteController = new QuoteController()

  imgController = new ImgController()



}

window["app"] = new App();
