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
    'modalBMW_530i_xDrive_89', 'modalBMW_X5_xDrive40i_84', 'modalMercedes-Benz_E350_87',
    'modalMercedes-Benz_GLE_350_93', 'modalMercedes-Benz_GLS_450_95',
    'modalRange_Rover_Velar_99', 'modalAudi_Q8_55TFSI_1', 'modalBMW_X7_xDrive40i_3',
    'modalLexus_GX_550_12', 'modalMercedes-Benz_GLC_300_14', 'modalBMW_X6_xDrive40i_17',
    'modalToyota_LC_250_20', 'modalFord-F-150-Raptor-V8-29',
    'modalMercedes-Benz-AMG-GLE53-Coupe-44', 'modalAudi-Q8-55TFSI-47',
    'modalBMW-X5M-Competition-48', 'modalJeep-Grand-Cherokee-57', 'modalJeep-Wrangler-58',
    'modalBMW-X6-xDrive40i-72', 'modalPorsche-Panamera-4-84',
    'modalAudi-A6-allroad-90', 'modalRange-Rover-Sport-91', 'modalMercedes-Benz-G-class-92',
    'modalAudi-Q7-02', 'modalMB-AMG-GLE53-03', 'modalBentley-Bentayga-07',
    'modalRange-Rover-Sport-08', 'modalAudi-A8-Long-55-TFSI-10',
    'modalAudi-Q7-45-TFSI-15', 'modalBMW-740d-xDrive-16',
    'modalBMW-740i-xDrive-17', 'modalINFINITI-QX80-18', 'modalVolvo-XC90-B5-19',
    'modalAudi-Q7-45-TDI-23', 'modalPorsche-Panamera-24', 'modalPorsche-Cayenne-25', 'modalPorsche-Cayenne-26', 'modalBMW-X5-xDrive30d-36',
    'modalBMW-X7-M50d-38', 'modalBMW-X7-xDrive40i-39', 'modalMB-GLE-53-AMG-Coupe-42',
    'modalVolvo-XC90-B5-Diesel-43', 'modalMercedes-Benz-GLE400-Coupe-44', 'modalBMW-X5-xDrive40i-45', 'modalMercedes-Benz-GLE-350-46', 'modalMercedes-Benz-S350d-47',
'modalRange-Rover-48', 'modalMercedes-Benz-GLS-450-49', 'modalVolkswagen-Touareg-50'];

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
        '#modalRange_Rover_86', '#modalBMW_530i_xDrive_89', '#modalBMW_X5_xDrive40i_84', '#modalMercedes-Benz_E350_87',
        '#modalMercedes-Benz_GLE_350_93', '#modalMercedes-Benz_GLS_450_95', '#modalRange_Rover_Velar_99', '#modalAudi_Q8_55TFSI_1',
        '#modalBMW_X7_xDrive40i_3', '#modalLexus_GX_550_12', '#modalMercedes-Benz_GLC_300_14',
        '#modalBMW_X6_xDrive40i_17', '#modalToyota_LC_250_20', '#modalFord-F-150-Raptor-V8-29',
        '#modalMercedes-Benz-AMG-GLE53-Coupe-44', '#modalAudi-Q8-55TFSI-47', '#modalBMW-X5M-Competition-48',
        '#modalJeep-Grand-Cherokee-57', '#modalJeep-Wrangler-58', '#modalBMW-X6-xDrive40i-72',
        '#modalPorsche-Panamera-4-84',
        '#modalAudi-A6-allroad-90', '#modalRange-Rover-Sport-91', '#modalMercedes-Benz-G-class-92',
        '#modalAudi-Q7-02', '#modalMB-AMG-GLE53-03', '#modalBentley-Bentayga-07',
        '#modalRange-Rover-Sport-08', '#modalAudi-A8-Long-55-TFSI-10',
        '#modalAudi-Q7-45-TFSI-15', '#modalBMW-740d-xDrive-16',
        '#modalBMW-740i-xDrive-17', '#modalINFINITI-QX80-18', '#modalVolvo-XC90-B5-19',
        '#modalAudi-Q7-45-TDI-23', '#modalPorsche-Panamera-24', '#modalPorsche-Cayenne-25', '#modalPorsche-Cayenne-26', '#modalBMW-X5-xDrive30d-36',
        '#modalBMW-X7-M50d-38', '#modalBMW-X7-xDrive40i-39', '#modalMB-GLE-53-AMG-Coupe-42',
        '#modalVolvo-XC90-B5-Diesel-43', '#modalMercedes-Benz-GLE400-Coupe-44', '#modalBMW-X5-xDrive40i-45', '#modalMercedes-Benz-GLE-350-46', '#modalMercedes-Benz-S350d-47',
    '#modalRange-Rover-48', '#modalMercedes-Benz-GLS-450-49', '#modalVolkswagen-Touareg-50'];

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


