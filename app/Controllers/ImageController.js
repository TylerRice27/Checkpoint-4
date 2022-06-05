import { ProxyState } from "../AppState.js";
import { imageService } from "../Services/ImageService.js";


//draws my pictures and makes them look right

function _drawimg() {
    document.body.style.backgroundImage = `url('${ProxyState.image.url})`
    document.body.style.backgroundSize = 'cover'

}



export class ImgController {
    constructor() {
        ProxyState.on("image", _drawimg)
        imageService.getImg()
    }

}