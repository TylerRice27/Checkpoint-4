export class Weather {
    constructor(data) {

        this.temp = data.temp || data.main.temp
        this.humidity = data.main.humidity
        this.name = data.name

    }



    get Template() {
        return `

            <p class="col-md-3 d-flex text-self-end temp">${this.temp}</p></div >
<p class="col-md-3 d-flex text-self-end temp">${this.humidity}</p></div >
<p class="col-md-3 d-flex text-self-end temp">${this.name}</p></div >

      `
    }


}