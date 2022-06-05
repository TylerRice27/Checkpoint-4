


export class Quote {

    constructor(data) {
        this.content = data.content
        this.author = data.author

    }



    get Template() {
        return `
<h5 class="myQuote">${this.content}</h5>

<div class="hide">${this.author}</div>

`


    }


}