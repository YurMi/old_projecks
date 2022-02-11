//For Switch button
const checkButton = document.querySelector('.ret')
const forChecing = document.querySelector('.for_checing');
const dateSelect = document.querySelector('.date_select');
const recurrenceSelect = document.querySelector('.recurrence_select');

const checkButton2 = document.querySelector('.switch_box_2')
const checkForm = document.querySelector('._checkForm');

checkButton.addEventListener('click', function () {
    checkButton.classList.toggle('active')
    forChecing.classList.toggle('is_checked')

    dateSelect.classList.toggle('hidden_select')
    recurrenceSelect.classList.toggle('hidden_recurrence')
})

checkButton2.addEventListener('click', function () {
    checkButton2.classList.toggle('active');
    checkForm.classList.toggle('is_checked');
})



