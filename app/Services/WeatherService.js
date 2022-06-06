import { ProxyState } from "../AppState.js";
import { Weather } from "../Models/Weather.js"
import { sandboxApi } from "./AxiosService.js";

// come back to this code to figure out F to C
// then write a toggle or button go between the two
// function cToF(celsius) {
//     var cTemp = celsius;
//     var cToFahr = cTemp * 9 / 5 + 32;
//     var message = cTemp + '\xB0C is ' + cToFahr + ' \xB0F.';
//     console.log(message);
// }

// function fToC(fahrenheit) {
//     var fTemp = fahrenheit;
//     var fToCel = (fTemp - 32) * 5 / 9;
//     var message = fTemp + '\xB0F is ' + fToCel + '\xB0C.';
//     console.log(message);
// }
// cToF(60);
// fToC(45);


class WeathersService {

    async getWeather() {
        const res = await sandboxApi.get('weather')
        console.log('get weather info', res.data);
        ProxyState.weather = new Weather(res.data)

        console.log(ProxyState.weather);


    }



}

















export const weathersService = new WeathersService()