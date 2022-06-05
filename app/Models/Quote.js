


export class Quote {

    constructor(data) {
        this.content = data.content
        this.author = data.author

    }



    get Template() {
        return `
<h5>${this.content}</h5>

<div>${this.author}</div>

`


    }


}