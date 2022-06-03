
const sandboxApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/',
    timeout: 12000
})




export class WeatherController {
    constructor() {


async backgroundImage() {
            try {
                await backgroundImage.backgroundImg()
            } catch (error) {
                console.error(error)
                Pop.toast(error.message, "error")
            }
        }


        document.body.style.backgroundImage = "('image')";
    }



}