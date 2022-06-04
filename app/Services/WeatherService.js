import { ProxyState } from "../AppState.js";
import { Weather } from "../Models/Weather.js"
import { sandboxApi } from "./AxiosService.js";





class WeathersService {

    async getWeather() {
        const res = await sandboxApi.get()
        console.log('get weather info', res.data);

    }


}

















export const weathersService = new WeathersService()