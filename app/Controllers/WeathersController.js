import { ProxyState } from "../AppState.js";
import { sandboxApi } from "../Services/AxiosService.js";
import { weathersService } from "../Services/WeatherService.js";





export class WeatherController {
    constructor() {
        console.log("weather controller loaded");
        // ProxyState.on("weather info", )

    }


    async getWeather() {
        try {
            await weathersService.getWeather()
        } catch (error) {
            console.error(error)
            Pop.toast(error.message, 'error')
        }
    }



}