const endPoint = "http://localhost:3000/quotes";

document.addEventListener('DOMContentLoaded', () => {
    getQuotes()

    const createQuoteForm = document.querySelector("#new-quote-form")

    createQuoteForm.addEventListener("submit", (e) => createFormHandler(e))
})

function getQuotes() {
    fetch(endPoint)
    .then(response => response.json())
    .then(quotes => {
        quotes.data.forEach(quote => {
        
        let newQuote = new Quote(quote, quote.attributes)

        document.querySelector('#quote-container').innerHTML += newQuote.renderQuoteCard()

        })
    })
}

function createFormHandler(e) {
    e.preventDefault()
    const contentInput = document.querySelector('#input-content').value 
    const categoryId = parseInt(document.querySelector('#categories').value)
    postFetch(contentInput, categoryId)
  
}

function postFetch(content, category_id) {
    const bodyData = {content, category_id}

    fetch(endPoint, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(bodyData)
            
    })
    .then(response => response.json())
    .then(quote => {
        console.log(quote);
        const quoteData = quote.data 
        // renderQuoteCard(quoteData)
        let newQuote = new Quote(quoteData, quoteData.attributes)
    document.querySelector('#quote-container').innerHTML += newQuote.renderQuoteCard()
    })
}

