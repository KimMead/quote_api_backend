//Quote class created here. Every new instance of Quote is run through this constructor
class Quote {
    constructor(quote, quoteAttributes) {
        this.id = quote.id 
        this.content = quoteAttributes.content 
        this.category = quoteAttributes.category
        Quote.all.push(this)
        console.log(this)
    }

 renderQuoteCard() {
    return `
        <div data-id=${this.id}>
        <h3>${this.content}</h3>
        <p>${this.category.name}</p>
        <button data-id=${this.id}>edit</button>
        </div>
        <br></br>`;

    }
}

Quote.all = [];

