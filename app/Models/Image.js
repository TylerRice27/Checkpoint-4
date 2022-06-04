import { sandboxApi } from "../Services/AxiosService.js";



export class Background {
    constructor() {

        this.drawBackground()

    }



    drawBackground() {
        // document.body.style.backgroundColor = "#f3f3f3";
        // document.body.style.backgroundImage = sandboxApi.get('images');
        // console.log(sandboxApi.get('images'));

        document.getElementById("background").innerHTML = document.body.style.backgroundImage = sandboxApi.get('images');
    }

}