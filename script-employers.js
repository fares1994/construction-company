const searchbar = document.getElementById('search')
const cards = document.getElementsByClassName('card')
searchbar.addEventListener('input', function (evt) {
    const input = this.value.toLowerCase()
    const cardslength = cards.length
    for (i = 0; i < cardslength; i++) {
        n = cards[i].childNodes[3].childNodes[1].textContent.toLowerCase().includes(input)
        console.log(n)
        if (n) {
            cards[i].style.display = 'block'
        }
        else {
            cards[i].style.display = 'none'
        }
    }
});

