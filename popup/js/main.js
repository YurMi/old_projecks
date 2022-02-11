const card_button = document.querySelectorAll('.card__button');
//serch popup
let popup = document.querySelector('.popup');
const popup_body = document.querySelector('.popup__body');
const popupClose = document.querySelector('.popup__close');


//Listen click to open popup
card_button.forEach(button =>
    button.addEventListener('click', when_CardButton_is_clicked));

//Появление попап
function when_CardButton_is_clicked(e) {
    const btn = e.target;
    //serch card
    const card = btn.closest('.card');
    //serch a img in the card
    const card_img = card.querySelector('img').src;
    //serch data-atribut
    const card_desc = card.dataset.description;

    //open popup after click a button on card
    popup.classList.add('active');

    //make a content in popup__body
    popup_body.innerHTML = `
        <div class='popup__img'>
            <img src='${card_img}' alt="${card_desc}">
        </div>
        <h2>${card_desc}</h2>
    `
}


//fnc for closing popup
function toClose_popup() {
    popup.classList.remove('active');
}



//Listen click to close popup
popup.addEventListener('click', function (e) {
    const click_out_side = !e.target.closest('.popup__body');

    if (click_out_side == true) {
        toClose_popup();
    }
})

//Listen "ESC" to close popup
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        toClose_popup();
    }
})







