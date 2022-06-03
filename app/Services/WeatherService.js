import { ProxyState } from "../AppState";
import { Weather } from "../Models/Weather"





class WeathersService {
    async backgroundImg() {
        let backimg = ProxyState.backgroundImg
        const res = await sandboxApi.get('', todo)
        console.log("add a todo item", res.data);
    }
}

















export const weathersService = new WeathersService()