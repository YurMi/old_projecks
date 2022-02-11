$('#data_picker').datetimepicker({ footer: true, modal: true });

const parent = document.querySelector('.gj-datepicker')
const childIconCalendar = parent.querySelector('.gj-icon');






childIconCalendar.addEventListener('click', function () {
    const parentOpenedCalendar = document.querySelector('.gj-modal');
    //Перебиваю display: block на display: flex ( добавляю адаптив)
    parentOpenedCalendar.style.display = 'flex';

    // удаляю css style:left. Что б датапикер всегда был по центру экрана
    const datetimepicker = document.querySelector('.datetimepicker');
    datetimepicker.style.left = '';

})



