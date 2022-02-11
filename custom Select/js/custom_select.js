function custom_select() {
    const dropdown = document.querySelector('.dropdown');
    const textBox = document.querySelector('.textBox')
    const optionShow = document.querySelectorAll('.option_show');

    //слушатель клика на тело Select, добавляет класс
    dropdown.addEventListener('click', function (e) {
        dropdown.classList.toggle('active');
    })


    optionShow.forEach(button => button.addEventListener('click', function (e) {
        // находит каждый элемент спика
        const dataInfo = e.currentTarget.dataset.show;

        //добавляет выбраный элемент списка в Select
        textBox.value = dataInfo;
    }));



}
custom_select();