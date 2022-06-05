import { ProxyState } from "../AppState.js";
import { sandboxApi } from "../Services/AxiosService.js";
import { weathersService } from "../Services/WeatherService.js";



function _drawWeather() {
    document.getElementById("weather").innerHTML = ProxyState.weather.Template

}

export class WeatherController {
    constructor() {
        console.log("weather controller loaded");
        ProxyState.on("weather", _drawWeather)

        weathersService.getWeather()
    }




}