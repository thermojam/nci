"use strict";

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

// VALIDATION and Masks
$('.mask').mask('+7 (999) 999 99 99');

// modal-call
document.getElementById('name_call').addEventListener('input', function () {
    this.value = this.value.replace(/[^A-Za-zА-Яа-яЁё\s]/g, '');
});

document.getElementById('mobile_call').addEventListener('input', function () {
    this.value = this.value.replace(/[^0-9+]/g, '');
});

// order-modal
document.getElementById('name').addEventListener('input', function () {
    this.value = this.value.replace(/[^A-Za-zА-Яа-яЁё\s]/g, '');
});
document.getElementById('mobile_tel').addEventListener('input', function () {
    this.value = this.value.replace(/[^0-9+]/g, '');
});

// calculation
document.getElementById('user_name').addEventListener('input', function () {
    this.value = this.value.replace(/[^A-Za-zА-Яа-яЁё\s]/g, '');
});
document.getElementById('mobile_phone').addEventListener('input', function () {
    this.value = this.value.replace(/[^0-9+]/g, '');
});

// NAV-LINKS-SHOW
document.querySelectorAll('.nav-link').forEach(item => {
    item.addEventListener('click', () => {
        // Проверяем, является ли ширина окна меньше или равной 768px (предположим, что это ваш порог для мобильной версии)
        if (window.innerWidth <= 992) {
            const navbarToggler = document.querySelector('.navbar-toggler');

            // Проверяем, свернуто ли меню
            if (!navbarToggler.classList.contains('collapsed')) {
                navbarToggler.click(); // Симулируем клик по кнопке "бургер"
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
let modalIDs = [
    'modalCadillac_Escalade', 'modalBMW_X7_xDrive40i_049', 'modalRange_Rover_86',
    'modalBMW_X5_xDrive40i_84',
    'modalMercedes-Benz_GLE_350_93', 'modalMercedes-Benz_GLS_450_95',
    'modalRange_Rover_Velar_99',
    'modalLexus_GX_550_12', 'modalBMW_X6_xDrive40i_17',
    'modalToyota_LC_250_20', 'modalFord-F-150-Raptor-V8-29',
    'modalMercedes-Benz-AMG-GLE53-Coupe-44',
    'modalBMW-X5M-Competition-48', 'modalRange-Rover-Sport-91', 'modalAudi-Q7-02', 'modalMB-AMG-GLE53-03', 'modalBentley-Bentayga-07',
    'modalAudi-Q7-45-TFSI-15',
    'modalINFINITI-QX80-18', 'modalVolvo-XC90-B5-19',
    'modalPorsche-Panamera-24', 'modalPorsche-Cayenne-25', 'modalBMW-X5-xDrive30d-36',
    'modalBMW-X5-xDrive40i-45',
    'modalVolvo-XC90-B5-Diesel-51',
    'modalMB-GLE-53-AMG-54', 'modalBMW-520i-57', 'modalJeep-Grand-Cherokee-58',
    'modalJeep-Wrangler-59', 'modalMercedes-Benz-E200-60', 'modalMB-G-class-61', 'modalAudi-Q8-55TFSI-62',
    'modalMercedes-Benz-CLE200-65', 'modalBentley-Flying-Spur-66', 'modalBMW-740i-xDrive-68',
    'modalAudi-A6-allroad-73',
    'modalRange-Rover-Sport-80', 'modalBMW-740d-xDrive-82',
    'modalMercedes-Benz-S500-84', 'modalPorsche-Cayenne-85', 'modalPorsche-Panamera-86',
    'modalAudi-Q7-45-TDI-88', 'modalBMW-X7-xDrive30d-90', 'modalVolkswagen-Touareg-91',
    'modalJeep-Wrangler-Willys-94', 'modalRange-Rover-HSE-95', 'modalMercedes-Benz-GLE-350-96', 'modalAudi-Q7-50-TDI-97', 'modalBMW-740i-xDrive-98',
    'modalBMW-X6-xDrive-99', 'modalVolvo-XC90-T8-01', 'modalAudi-A8-Long-55-TFSI-02', 'modalMercedes-Benz-GLS-450-03', 'modalBMW-740i-xDrive-04',
    'modalAudi-Q8-55TFSI-05', 'modalBMW-X7-xDrive40i-06', 'modalMercedes-Benz-GLC300-07'];

// Инициализация обработчика для каждого модального окна
modalIDs.forEach(function (modalID) {
    $('#' + modalID).on('shown.bs.modal', function () {

        //CATALOG-SLIDER-3
        function initSwipers(containerSelector) {
            let containers = document.querySelectorAll(containerSelector);

            containers.forEach(function (container) {
                let mainSlider = new Swiper(container.querySelector('.main-slider'), {
                    spaceBetween: 10,
                    lazy: true,
                    grabCursor: true,
                    speed: 1000,
                    autoplay: {
                        delay: 5000,
                    },
                });

                //CATALOG-SLIDER-4
                let thumbnailSlider = new Swiper(container.querySelector('.thumbnail-slider'), {
                    slidesPerView: 5,
                    spaceBetween: 10,
                    lazy: true,
                });

                mainSlider.controller.control = thumbnailSlider;
                thumbnailSlider.controller.control = mainSlider;

                thumbnailSlider.on('click', function () {
                    let clickedIndex = thumbnailSlider.clickedIndex;
                    mainSlider.slideTo(clickedIndex);
                });
            });
        }

        initSwipers('.slider-container');

        console.log('Модальное окно с ID ' + modalID + ' отображено.');
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

//MODAL URL + BACK CATALOG
$(document).ready(function () {
    const modalIds = [
        '#modalCadillac_Escalade', '#modalBMW_X7_xDrive40i_049', '#modalRange_Rover_57',
        '#modalRange_Rover_86', '#modalBMW_X5_xDrive40i_84',
        '#modalMercedes-Benz_GLE_350_93', '#modalMercedes-Benz_GLS_450_95', '#modalRange_Rover_Velar_99',
        '#modalLexus_GX_550_12',
        '#modalBMW_X6_xDrive40i_17', '#modalToyota_LC_250_20', '#modalFord-F-150-Raptor-V8-29',
        '#modalMercedes-Benz-AMG-GLE53-Coupe-44', '#modalBMW-X5M-Competition-48',
        '#modalRange-Rover-Sport-91',
        '#modalAudi-Q7-02', '#modalMB-AMG-GLE53-03', '#modalBentley-Bentayga-07',
        '#modalAudi-Q7-45-TFSI-15',
        '#modalINFINITI-QX80-18', '#modalVolvo-XC90-B5-19',
        '#modalPorsche-Panamera-24', '#modalPorsche-Cayenne-25', '#modalBMW-X5-xDrive30d-36',
        '#modalBMW-X5-xDrive40i-45',
        '#modalVolvo-XC90-B5-Diesel-51',
        '#modalMB-GLE-53-AMG-54', '#modalBMW-520i-57', '#modalJeep-Grand-Cherokee-58',
        '#modalJeep-Wrangler-59', '#modalMercedes-Benz-E200-60', '#modalMB-G-class-61', '#modalAudi-Q8-55TFSI-62',
        '#modalMercedes-Benz-CLE200-65', '#modalBentley-Flying-Spur-66', '#modalBMW-740i-xDrive-68',
        '#modalAudi-A6-allroad-73',
        '#modalRange-Rover-Sport-80', '#modalBMW-740d-xDrive-82',
        '#modalMercedes-Benz-S500-84', '#modalPorsche-Cayenne-85', '#modalPorsche-Panamera-86',
        '#modalAudi-Q7-45-TDI-88', '#modalBMW-X7-xDrive30d-90', '#modalVolkswagen-Touareg-91',
        '#modalJeep-Wrangler-Willys-94', '#modalRange-Rover-HSE-95', '#modalMercedes-Benz-GLE-350-96', '#modalAudi-Q7-50-TDI-97', '#modalBMW-740i-xDrive-98',
        '#modalBMW-X6-xDrive-99', '#modalVolvo-XC90-T8-01', '#modalAudi-A8-Long-55-TFSI-02', '#modalMercedes-Benz-GLS-450-03', '#modalBMW-740i-xDrive-04',
        '#modalAudi-Q8-55TFSI-05', '#modalBMW-X7-xDrive40i-06', '#modalMercedes-Benz-GLC300-07'];

    modalIds.forEach(function (modalId) {
        if (window.location.href.indexOf(modalId) !== -1) {
            $(modalId).modal('show');
        }
    });

    const modalIdsclose = modalIds; // используем одну и ту же переменную

    $('.back-catalog').on('click', function () {
        // Close the modal window
        $.each(modalIdsclose, function (index, modalId) {
            $(modalId).modal('hide');
        });

        // Scroll to the catalog block
        $('html, body').animate({
            scrollTop: $('#catalog').offset().top
        }, 'slow');
    });
});

// URL modal address bar
const modals = [
    'modalCadillac_Escalade', 'modalBMW_X7_xDrive40i_049', 'modalRange_Rover_86',
    'modalBMW_X5_xDrive40i_84',
    'modalMercedes-Benz_GLE_350_93', 'modalMercedes-Benz_GLS_450_95',
    'modalRange_Rover_Velar_99',
    'modalLexus_GX_550_12','modalBMW_X6_xDrive40i_17',
    'modalToyota_LC_250_20', 'modalFord-F-150-Raptor-V8-29',
    'modalMercedes-Benz-AMG-GLE53-Coupe-44', 'modalBMW-X5M-Competition-48', 'modalRange-Rover-Sport-91',
    'modalAudi-Q7-02', 'modalMB-AMG-GLE53-03', 'modalBentley-Bentayga-07',
    'modalAudi-Q7-45-TFSI-15',
    'modalINFINITI-QX80-18', 'modalVolvo-XC90-B5-19',
    'modalPorsche-Panamera-24', 'modalPorsche-Cayenne-25', 'modalBMW-X5-xDrive30d-36',
    'modalBMW-X5-xDrive40i-45',
    'modalVolvo-XC90-B5-Diesel-51',
    'modalMB-GLE-53-AMG-54', 'modalBMW-520i-57', 'modalJeep-Grand-Cherokee-58',
    'modalJeep-Wrangler-59', 'modalMercedes-Benz-E200-60', 'modalMB-G-class-61', 'modalAudi-Q8-55TFSI-62',
    'modalMercedes-Benz-CLE200-65', 'modalBentley-Flying-Spur-66', 'modalBMW-740i-xDrive-68',
    'modalAudi-A6-allroad-73',
    'modalRange-Rover-Sport-80', 'modalBMW-740d-xDrive-82',
    'modalMercedes-Benz-S500-84', 'modalPorsche-Cayenne-85', 'modalPorsche-Panamera-86',
    'modalAudi-Q7-45-TDI-88', 'modalBMW-X7-xDrive30d-90', 'modalVolkswagen-Touareg-91',
    'modalJeep-Wrangler-Willys-94', 'modalRange-Rover-HSE-95', 'modalMercedes-Benz-GLE-350-96', 'modalAudi-Q7-50-TDI-97', 'modalBMW-740i-xDrive-98',
    'modalBMW-X6-xDrive-99', 'modalVolvo-XC90-T8-01', 'modalAudi-A8-Long-55-TFSI-02', 'modalMercedes-Benz-GLS-450-03', 'modalBMW-740i-xDrive-04',
    'modalAudi-Q8-55TFSI-05', 'modalBMW-X7-xDrive40i-06', 'modalMercedes-Benz-GLC300-07'];

$(document).ready(function () {

    $('[id^=modal]').on('show.bs.modal', function (e) {
        const modalId = $(this).attr('id'); // Получаем полный ID
        history.pushState(null, null, `?modal=${modalId}`);
    });

    $('[id^=modal]').on('hide.bs.modal', function () {
        history.pushState(null, null, window.location.pathname);
    });

    const urlParams = new URLSearchParams(window.location.search);
    const modalNumber = urlParams.get('modal');
    if (modalNumber && modals.includes(modalNumber)) {
        $(`#${modalNumber}`).modal('show');
    }
});

// FUNCTION SHARE CARD
function shareCard(cardId) {
    const shareUrl = `${window.location.origin}${window.location.pathname}?modal=${cardId}`;

    // Проверяем, поддерживается ли Web Share API
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
        // Если Web Share API не поддерживается, копируем ссылку в буфер обмена
        navigator.clipboard.writeText(shareUrl)
            .then(() => alert(`Ссылка на карточку ${cardId} скопирована: ${shareUrl}`))
            .catch(err => alert('Ошибка при копировании ссылки.'));
    }
}





























