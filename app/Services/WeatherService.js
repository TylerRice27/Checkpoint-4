import { ProxyState } from "../AppState.js";
import { Weather } from "../Models/Weather.js"
import { sandboxApi } from "./AxiosService.js";





class WeathersService {

    async getWeather() {
        const res = await sandboxApi.get('weather')
        console.log('get weather info', res.data);
        ProxyState.weathers = res.data.map(w => new Weather(w))


    }


}

















export const weathersService = new WeathersService()