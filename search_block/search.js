const searchBox = document.querySelector('.search-box');
const searchBTN = document.querySelector('.search-btn');
const searchText = document.querySelector('.search-txt');
const searchResult = document.querySelector('.search_result');
const filterAnsver = document.querySelector('.filter_ansver');





searchBTN.addEventListener('click', function () {
    searchBox.classList.toggle('active')
})


// function typeHandler(e) {
//     searchResult.innerHTML = e.target.value;
// }

// searchText.addEventListener('input', typeHandler)
// searchText.addEventListener('propertychange', typeHandler)





function filetr_search() {
    // Объявить переменные
    const search_input = document.querySelector('.search-txt');
    const filter = search_input.value.toUpperCase();
    const ul = document.getElementById("search_myMenu");
    const li = ul.getElementsByTagName("li");

    // Прокрутите все элементы списка и скройте те, которые не соответствуют поисковому запросу
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            ul.classList.remove('active')
        } else {
            li[i].style.display = "none";
            ul.classList.add('active')
        }
    }
}
