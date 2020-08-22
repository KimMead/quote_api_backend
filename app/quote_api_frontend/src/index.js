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
            const quoteMarkup = `
            <div data-id=${quote.id}>
            <h3>${quote.attributes.content}</h3>
            <p>${quote.attributes.category.name}</p>
            <button data-id=${quote.id}>edit</button>
            </div>
            <br></br>`;

            document.querySelector('#quote-container').innerHTML +=quoteMarkup 
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
        
    })
}