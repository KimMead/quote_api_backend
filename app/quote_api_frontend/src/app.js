//ADD EDIT CODE//
class App {
    attachEventListeners() {
        document.querySelector('#quote-container').addEventListener('click', e => {
            const id = parseInt(e.dataset.id);
            const quote = Quote.findById(id);
        document.querySelector('#update').innerHTML = quote.renderUpdateForm();
            const id = parseInt(e.target.dataset.id);
            const note = Quote.findById(id);
            const content = e.target.querySelector('textarea').value;

            const bodyJSON = { title, content };
      fetch(`http://localhost:3000/quotes/${quote.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(bodyJSON),
      })
        .then(res => res.json())
        .then(updatedQuote => console.log(updatedQuote));
        });
    }
}
