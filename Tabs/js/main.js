const tabs = document.querySelector('.tabs__buttons');
const tabButtons = document.querySelectorAll('[role="tab"]');
const tabPanels = document.querySelectorAll('[role="tabpanel"]');


//Listener buttos to tabs
tabButtons.forEach(button => button.addEventListener('click', tabClick));


//what will be after click a buttonss
function tabClick(e) {
    //1) hidden all tabs after click a button
    tabPanels.forEach(function (panel) {
        panel.hidden = true;
    });
    //При клике на кнопку  табов сбрасываем aria-selected='true'  на 'false', на всех кнопках 
    tabButtons.forEach(tab => {
        tab.setAttribute('aria-selected', false)
    })
    //Затем сразу же добавляем aria-selected='true' той кнопке табов на которую нажали 
    e.currentTarget.setAttribute('aria-selected', true)

    //находи id каждой кнопки 
    const idTabPanels = e.currentTarget.id;

    //находим каждый таб (информацию таба) и связываем (aria-labelledby) таба с id кнопки 
    const tabPanel = document.querySelector(`[aria-labelledby = "${idTabPanels}"]`);

    //отменяем hidden нужного таба
    tabPanel.hidden = false;
}