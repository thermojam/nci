//ORDER-CARS-INPUT-HIDDEN
$(document).ready(function () {
    $('.order-btn').click(function () {
        let title = $(this).data('title');
        $('#orderProduct').val(title);
        $('#orderModal').modal('show');
    });
});

// LOADER
window.addEventListener("load", function () {
    document.getElementById("loaderContainer").style.display = "none";
});

// fUNCTION MASK
function setupInputValidation(inputSelector, validationType, mask) {
    const inputElements = document.querySelectorAll(inputSelector)

    inputElements.forEach(inputElement => {
        if (!inputElement)
            return

        if (mask) {
            $(inputElement).mask(mask)
        }

        inputElement.addEventListener('input', function () {
            if (validationType === 'text') {
                this.value = this.value.replace(/[^A-Za-zА-Яа-яЁё\s]/g, '')
            } else if (validationType === 'phone') {
                this.value = this.value.replace(/[^0-9+]/g, '')
            }
        })
    })
}

setupInputValidation('#name_call', 'text')
setupInputValidation('#mobile_call', 'phone', '+7 (999) 999 99 99')
setupInputValidation('#name', 'text')
setupInputValidation('#mobile_tel', 'phone', '+7 (999) 999 99 99')
setupInputValidation('#user_name', 'text')
setupInputValidation('#mobile_phone', 'phone', '+7 (999) 999 99 99')



// NAV-LINKS-SHOW
document.querySelectorAll('.nav-link').forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth <= 992) {
            const navbarToggler = document.querySelector('.navbar-toggler');

            if (!navbarToggler.classList.contains('collapsed')) {
                navbarToggler.click();
            }
        }
    });
});

//CATALOG-SLIDER-1
let swiper1 = new Swiper('#swiper1', {
    slidesPerView: 3,
    spaceBetween: 20,
    grabCursor: true,
    breakpoints: {
        1025: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        },
        345: {
            slidesPerView: 1,
        },
        320: {
            slidesPerView: 1,
        },
        300: {
            slidesPerView: 1,
        },
    },
});

//CATALOG-SLIDER-2
let swiper2 = new Swiper('#swiper2', {
    slidesPerView: 3,
    spaceBetween: 20,
    grabCursor: true,
    // lazy: true,
    stopOnInteraction: false,
    speed: 1000,
    autoplay: {
        delay: 5000,
    },
    breakpoints: {
        1025: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        },
        345: {
            slidesPerView: 1,
        },
        320: {
            slidesPerView: 1,
        },

        300: {
            slidesPerView: 1,
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Связывание слайдеров через общую пагинацию
swiper1.controller.control = swiper2;
swiper2.controller.control = swiper1;

// PRELOAD MODAL SLIDERS
$(document).ready(function () {

    const initSwipers = (containerSelector) => {
        document.querySelectorAll(containerSelector).forEach((container) => {
            let mainSlider = new Swiper(container.querySelector('.main-slider'), {
                spaceBetween: 10,
                lazy: true,
                grabCursor: true,
                speed: 1000,
                autoplay: { delay: 5000 },
            });

            let thumbnailSlider = new Swiper(container.querySelector('.thumbnail-slider'), {
                slidesPerView: 5,
                spaceBetween: 10,
                lazy: true,
            });

            mainSlider.controller.control = thumbnailSlider;
            thumbnailSlider.controller.control = mainSlider;

            thumbnailSlider.on('click', () => mainSlider.slideTo(thumbnailSlider.clickedIndex));
        });
    };

    $('[id^="modal"]').on('shown.bs.modal', function () {
        initSwipers('.slider-container');
    });
});


// REVIEW-SLIDER
let swiper5 = new Swiper("#swiper5", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    speed: 1000,
    autoplay: {
        delay: 5000,
    },
    breakpoints: {
        1025: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 3,
        },
        345: {
            slidesPerView: 1,
        },
        320: {
            slidesPerView: 1,
        },
        300: {
            slidesPerView: 1,
        },
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

//click slide links
document.querySelectorAll('#swiper5 .swiper-slide').forEach(slide => {
    const overlay = slide.querySelector('.overlay');
    const link = overlay.querySelector('a');

    overlay.addEventListener('click', () => {
        const url = link.getAttribute('href');
        if (url) {
            window.open(url, '_blank');
        }
    });
});

// SCREEN-SLIDER
let swiper6 = new Swiper("#swiper6", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    speed: 1000,
    autoplay: {
        delay: 5000,
    },
    breakpoints: {
        1025: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 3,
        },
        345: {
            slidesPerView: 1,
        },
        320: {
            slidesPerView: 1,
        },
        300: {
            slidesPerView: 1,
        },
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// MODAL-URL + BACK-CATALOG
window.addEventListener('load', function () {
    const modals = document.querySelectorAll('[id^="modal"]');
    const urlParams = new URLSearchParams(window.location.search);
    const modalId = urlParams.get('modal');

    function closeAllModals() {
        modals.forEach((modal) => {
            const instance = bootstrap.Modal.getInstance(modal);
            if (instance) {
                instance.hide();
            }
        });
    }

    function openModalById(id) {
        const modalEl = document.getElementById(id);
        if (!modalEl) return;

        const instance = bootstrap.Modal.getOrCreateInstance(modalEl);
        instance.show();
    }

    if (modalId) {
        openModalById(modalId);
    }

    modals.forEach((modal) => {
        modal.addEventListener('show.bs.modal', function () {
            const id = this.id;
            const url = new URL(window.location.href);
            url.searchParams.set('modal', id);
            history.pushState(null, '', url);
        });

        modal.addEventListener('hidden.bs.modal', function () {
            const baseUrl = window.location.origin + window.location.pathname;
            history.replaceState(null, '', baseUrl);
        });
    });

    document.querySelectorAll('.back-catalog').forEach((btn) => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            closeAllModals();

            const baseUrl = window.location.origin + window.location.pathname;
            history.replaceState(null, '', baseUrl);

            const catalog = document.getElementById('catalog');
            if (catalog) {
                catalog.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    window.addEventListener('popstate', function () {
        const modalParam = new URLSearchParams(window.location.search).get('modal');
        closeAllModals();

        if (modalParam) {
            openModalById(modalParam);
        }
    });
});


// FUNCTION SHARE CARD
function shareCard(cardId) {
    const shareUrl = `${window.location.origin}${window.location.pathname}?modal=${cardId}`;
    if (navigator.share) {
        navigator.share({
            title: `Карточка автомобиля ${cardId}`,
            url: shareUrl
        }).then(() => {
            console.log('Ссылка успешно отправлена.');
        }).catch((error) => {
            console.error('Ошибка при попытке поделиться:', error);
        });
    } else {
        navigator.clipboard.writeText(shareUrl)
            .then(() => alert(`Ссылка на карточку ${cardId} скопирована: ${shareUrl}`))
            .catch(err => alert('Ошибка при копировании ссылки.'));
    }
}





























