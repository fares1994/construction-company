const scroll = document.getElementsByClassName('box')
const container = document.getElementById('container').childNodes
//to make the scroll box element apear 
function scrollviewer(evt) {
    switch (evt) {
        case 'excavations':
            scroll[0].style.display = 'block'
            break;
        case 'concrete constructions':
            scroll[1].style.display = 'block'
            break;
        case 'mechanical works':
            scroll[2].style.display = 'block'
            break;
        case 'finishing works':
            scroll[3].style.display = 'block'
            break;
    }
    let el = document.getElementById('container')
    el.scrollIntoView({ behavior: 'smooth',block:"nearest" })
}
//to make the scroll box elements disapear
function showless() {
    for (i = 1; i < container.length; i = i + 2) {
        container[i].style.display = 'none'
    }
}
//for the drop down menu in the home navigation menu to scroll to the element and make the scroll box apear
const services = document.querySelectorAll('.dropdown-item')
services.forEach(element => {
    element.addEventListener('click', function () {
        showless()
        scrollviewer(element.innerHTML)
        let el = document.getElementById('container')
        el.scrollIntoView({ behavior: 'smooth',block:"nearest" })
    })
});

