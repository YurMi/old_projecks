function Gallery(gallery) {
    if (!Gallery) {
        return
    }

    //select the elements we need
    const body = document.querySelector('body');
    const images = Array.from(gallery.querySelectorAll('img'))
    const modal = document.querySelector('.modal');
    const nextButton = document.querySelector('.next');
    const preButton = document.querySelector('.prev');
    let currentImage;

    //!Desc: func do link (img,title,descr) a photo whis modal-window
    function showImage(el) {
        if (!el) {
            console.log('no image to show');
            return;
        }

        modal.querySelector('img').src = el.src;
        modal.querySelector('h2').textContent = el.title;
        modal.querySelector('.descr').textContent = el.dataset.description;
        currentImage = el;

        //open modal after click to img
        openModal();
    }


    //!Desc: openning modal after click to img
    function openModal() {
        //First we are check, if modal is alredy open


        if (modal.matches('.open')) {
            return // if open, next code will not to run
        }

        //modal to open, un next code
        modal.classList.add('open')

        lockBody();

        window.addEventListener('keyup', handelKeyUp);
        nextButton.addEventListener('click', showNextImage);
        preButton.addEventListener('click', showPrevImage);
    }

    //!Desc: to close the modal
    function closeModal() {
        modal.classList.remove('open')


        reLockBody();


        window.removeEventListener('keyup', handelKeyUp);
        nextButton.removeEventListener('click', showNextImage);
        preButton.removeEventListener('click', showPrevImage);

    }
    //closse modal if was click outside modal
    function handelClickOutSide(e) {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    }
    //!Using the keyboard
    function handelKeyUp(e) {
        //close modal if use 'ESC'
        if (e.key === 'Escape') return closeModal();
        //Key arrow for next img (change img using keyboard arrows)
        if (e.key === 'ArrowRight') return showNextImage();
        //prev img
        if (e.key === 'ArrowLeft') return showPrevImage();
    }



    images.forEach(imag => imag.addEventListener('click', e => showImage(e.currentTarget)))
    modal.addEventListener('click', handelClickOutSide);



    //!ARROW-BUTTON THE SLIDER (change img using arrow in clider)
    //hsow next img after click on arow
    function showNextImage(e) {
        showImage(currentImage.nextElementSibling || gallery.firstElementChild)
    }
    //show prev img. Показать предыдущую картинку
    function showPrevImage(e) {
        showImage(currentImage.previousElementSibling || gallery.lastElementChild)
    }


    //!Open modal with keyUp 'Enter' to a image
    images.forEach(image => {
        image.addEventListener('keyup', function (e) {
            if (e.key === 'Enter') {
                showImage(e.currentTarget)
            }
        })
    })


    //Lock scroll Body, if modal is openning
    function lockBody() {
        body.classList.add('lock');
    }

    //Back scroll Body, if modal is closing
    function reLockBody() {
        body.classList.remove('lock');
    }
}



//!!! reuse (переиспользование) code for each Galary
const galery1 = Gallery(document.querySelector('.gallery1'));

const galery2 = Gallery(document.querySelector('.gallery2'));