
window.addEventListener("load", ready);

const checkBox_1 = document.querySelector('.switch_button_1');
const dateSelect = document.querySelector('.date_select');
const dataPicker = document.querySelector('.data-picker');


function ready() {
    function trecker_1() {
        if (checkBox_1.checked) {
            dateSelect.classList.add('hidden_recurrence');
            dataPicker.classList.remove('hidden_recurrence');
        }
        else {
            dateSelect.classList.remove('hidden_recurrence');
            dataPicker.classList.add('hidden_recurrence');
        }
    }

    function isChecked() {
        trecker_1()
    }


    isChecked();

    checkBox_1.removeAttribute('onchange');
}



checkBox_1.addEventListener('click', function (params) {
    dateSelect.classList.toggle('hidden_recurrence');
    dataPicker.classList.toggle('hidden_recurrence');
})

