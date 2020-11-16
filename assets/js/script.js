$(document).ready(function(){
    $(".brand-slider").owlCarousel({
        items: 7,
        loop:true,
        nav:true,
        dots:false,
        navText:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:2000,
        autoplaySpeed:1000,
        autoHeight: true,
        slideBy : 3,
        responsive:{
            0:{
                items: 3,
                autoplay:false,

            },
            480:{
                items:4,
                autoplay:false,
                margin: 0
            },
            767: {
                items:4,
                autoplay:false,
                margin:0
            },
            1000:{
                items:7,
            }
        }
    });
});
window.onscroll = function showHeader() {
    let header =    document.querySelector(".header-fixed_wrapper");
    let header1 =    document.querySelector(".header");
    if (window.pageYOffset > 300) {
        header.classList.add("header-fixed");
        header1.classList.add("header-fixed")
    }
    else  {
        header.classList.remove("header-fixed")
    }
};
$(document).ready(function(){

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });



});
function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find(".burger-button-wrap");
    let links = menu.find("burger-menu_link");
    let overlay = menu.find("burger-menu_overlay");
    button.on("click",(e) => {
        e.preventDefault();
        toogleMenu();
    });
    links.on("click", () => toogleMenu());
    overlay.on("click", () => toogleMenu());
    function toogleMenu() {
        menu.toggleClass('burger-menu_active');

        if (menu.hasClass('burger-menu_active')) {
            $('body').css("overflow","hidden");
        }else  {
            $("body").css("overflow","visible")
        }
    }
}
burgerMenu('.burger-menu');


(function($) {
    $(function() {
        $("ul.tabs__caption").on("click", "li:not(.active)", function() {
            $(this)
                .addClass("active")
                .siblings()
                .removeClass("active")
                .closest("div.tabs")
                .find("div.tabs__content")
                .removeClass("active")
                .eq($(this).index())
                .addClass("active");
        });
    });
})(jQuery);
const accordions = document.querySelectorAll(".accordion-wrapper");
for (const accordion of accordions) {
    const panels = accordion.querySelectorAll(".accordion");
    for (const panel of panels) {
        const head = panel.querySelector(".accordion-header");
        head.addEventListener('click', () => {
            for (const otherPanel of panels) {
                if (otherPanel !== panel) {
                    otherPanel.classList.remove('accordion-expanded');
                }
            }
            panel.classList.toggle('accordion-expanded');
        });
    }
}
$(document).ready(function(){

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});
$('.burger-menu_link').on('click', function() {
    $(this).addClass('active')
        .siblings().removeClass('active');
});
$('.nav li').on('click', function() {
    $(this).addClass('active')
        .siblings().removeClass('active');
});
$('.nav_menu-wrap a ').on('click', function() {
    $(this).addClass('active')
        .siblings().removeClass('active');
});

