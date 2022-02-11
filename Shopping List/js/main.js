const shoping_form = document.querySelector('.shopping');
const spohhing_input = document.querySelector('.shopping__input');
const spopping_btn = document.querySelector('.shopping__btn');
const list_ul = document.querySelector('.list_ul');


//we need an arr to hpld our state
let items = [];



function handlSubmit(e) {
    e.preventDefault();

    //take a value of input
    const name = e.currentTarget.item.value;
    //если полу пустое, не добавлять в список
    if (!name) { return }
    const item = {
        name: name,
        id: Date.now(),
        complete: false,
    }
    //Push the items into our state (to items)
    items.push(item)

    //clear the input after add info
    e.target.reset();

    //this is custom events, это 
    list_ul.dispatchEvent(new CustomEvent('itemsUpDated'))
}


//!!Desc: take words from input. And make html
function displayItems() {

    const html = items.map(item => {
        return `<li class='shopping__item_li'>
        <input type='checkbox' value=${item.id} ${item.complete ? 'checked' : ''}>
        <span class='shopping__item_span'>${item.name}</span>
        <button value='${item.id}'>X</button>
        </li>`

    }).join('');


    list_ul.innerHTML = html;
}


//!!Desc: Push data input to dataBase into brouser
function mirrorTpLocalStorage() {
    localStorage.setItem('items', JSON.stringify(items))
}

//??take data from dataBase brouser and push this data(info item) to list_ul
function restoreFromLocalstorege() {
    //pull the items from LS
    const lsItems = JSON.parse(localStorage.getItem('items'));


    //?? if we have data items, push to list_ul
    if (lsItems) {
        items.push(...lsItems);
        list_ul.dispatchEvent(new CustomEvent('itemsUpDated'))
    }
}

shoping_form.addEventListener('submit', handlSubmit);
list_ul.addEventListener('itemsUpDated', displayItems);
list_ul.addEventListener('itemsUpDated', mirrorTpLocalStorage);

//!!Desc: delete Items 
function deleteItem(id) {
    items = items.filter(item => item.id !== id);
    list_ul.dispatchEvent(new CustomEvent('itemsUpDated'))
}

//! Desc: when list is checked 
function markAsComplete(id) {
    const itemRef = items.find(item => item.id === id);
    itemRef.complete = !itemRef.complete;
    list_ul.dispatchEvent(new CustomEvent('itemsUpDated'))
}
/*event delegation. Listener parent (list_ul) and each children in this list_ul.
Делегирование. Вешаем слушатель на родителя (list_ul) и мы видим клик на каждом дочернем элементе e.target
*/
list_ul.addEventListener('click', function (e) {
    const id = parseInt(e.target.value);

    //if was click to button = delite list_ul
    if (e.target.matches('button')) {
        deleteItem(id)
    }
    //if was click to checkbox = delet list_ul
    if (e.target.matches('input[type="checkbox"]')) {
        markAsComplete(id)
    }
})




restoreFromLocalstorege();
