function Slider(slider) {
    if (!slider) {
        return console.warn('Have not slider');
    }


    //The varibels for working with slider
    let current;
    let prev;
    let next;
    const slides = slider.querySelector('.slides');
    const prevButton = slider.querySelector('.goToPrev');
    const nextButton = slider.querySelector('.goToNext');




    function startSlider() {
        current = slider.querySelector('.current') || slides.firstElementChild;
        prev = current.previousElementSibling || slides.lastElementChild;
        next = current.nextElementSibling || slides.firstElementChild;
    }

    //! Desc: add classes( curent,next, prev) to all Sliders what to added
    function applyClasses() {
        current.classList.add('current');
        prev.classList.add('prev');
        next.classList.add('next');
    }

    //! Desc: moving classes by the list in the slider
    function moveSlideCards(direction) {
        const classesToRemove = ['prev', 'next', 'current'];

        prev.classList.remove(...classesToRemove);
        next.classList.remove(...classesToRemove);
        current.classList.remove(...classesToRemove);
        if (direction == 'back') {
            [prev, current, next] = [
                prev.previousElementSibling || slides.lastElementChild,
                prev,
                current];
        } else {
            [prev, current, next] = [
                current,
                next,
                next.nextElementSibling || slides.firstElementChild];

        }
        applyClasses();
    }


    //!when this slider is created, run the start slider func
    startSlider();
    applyClasses();

    // prevButton.forEach(button => button.addEventListener('click', () => moveSlideCards('back')));
    // nextButton.forEach(button => button.addEventListener('click', () => moveSlideCards));

    // event listeners for buttons a control
    prevButton.addEventListener('click', () => moveSlideCards('back'));
    nextButton.addEventListener('click', moveSlideCards);
}

const mySlider = Slider(document.querySelector('.slider'));
const dog_slider = Slider(document.querySelector('.dog-slider'))

