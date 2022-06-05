import { ProxyState } from "../AppState.js";
import { Quote } from "../Models/Quote.js";
import { sandboxApi } from "./AxiosService.js";





class QuoteService {

    async getQuote() {

        let res = await sandboxApi.get('quotes')
        console.log("get my quotes", res.data);
        ProxyState.quotes = new Quote(res.data)
    }

}


export const quoteService = new QuoteService()