export class Weather {
    constructor(data) {
        this.id = data.id
        this.temp = data.temp || data.main.temp

    }



    get Template() {
        return `

            <p class="col-md-3 d-flex text-self-end temp">${this.temp}</p></div >

      `
    }


}