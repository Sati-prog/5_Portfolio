// Немного о javaScript:

// 1) Переменные:
// var (устарел), let, const (неизменная)

// 2) Типы данных:
// number
// string - "", '', ``. 
// буллиновый тип данных или логический - true/false
// не существует - null
// undefined - что-то существует, но значения ни какого не имеет
// объект записывается при помощи фигурных скобок {}. Пример:
// Дано: яблоко
// Свойства: 
// let obj = {
//     name: 'apple',
//     color: 'green',
//     weight: 200 (вес: 200 грамм)
// }
// новый тип данных Symbol

// 3) Методы:
// alert(fdkvj) - информацию, написанную внутри него выводит на страницу
// console.log("number") - выводит информацию в консоль для общения разработчиков
// confirm("Вам есть 18?") - при помощи этого метода можно формировать поведение сайта

// 4) Операторы:
// console.log(4+4)

// Примеры операторов и (&&) и иль (||):

// let isChecked = true,
//     isClose = true;

// console.log(isChecked && isClose);
// console.log(isChecked || isClose);

// 5) Условия:
// Если выполнилось. Пример:
// if (2*4 == 8*1) {
//     console.log('Верно!')
// }

// Если не выполнилось. Пример:
// if (2*6 == 8*1) {
//     console.log('Верно!')
// } else {
//     console.log('Ошибка')
// }

// let answer = confirm("Вам есть 18?");
// if (answer) {
//     console.log('Проходите')
// } else {
//     console.log('Уходи')
// }

// Разветвленное условие. Пример:
// const num = 50;
// if (num < 49) {
//     console.log('Не правильно')
// }  else if (num > 100) {
//     console.log('Много')
// }  else {
//     console.log('Верно')
// }

// 6) Циклы:
// for(let i = 1; i < 8; i ++) {
//     console.log(i)
// }

// 7) Функии:
// function logging(a, b) {
//     console.log(a + b)
// }

// logging(3, 5);
// logging(6, 8);



//Carousel

$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/pointers/chevron-left-solid.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/pointers/chevron-right-solid.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });

    //Catalog
    
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            });
        });
    }

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    //Modal

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });

    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });

    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста введите свое имя",
                    minlength: jQuery.validator.format("Введите более {0} символов!")
                },
                phone: "Пожалуйста введите номер телефона",
                email: {
                    required: "Пожалуйста введите почтовый адрес",
                    email: "Неправильно введен адрес почты"
                }
            }
        });
    }

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');

    $('input[name=phone]').mask("+7 (999) 999-99-99");
    

    //Отправка данных на почту при помощи этого скрипта:

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');
            $('form').trigger('reset');
        });
        return false;
    });


    //Smooth scroll and pageup

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href=#up]").click(function() {
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    // new WOW().init();
});