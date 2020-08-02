$(".navbar-nav li a:not('dropdown-toggle')").on('click', function(){
    $('.navbar-collapse').collapse('hide');
})



$(document).ready(function(){

    $('body').scrollspy({target: '.navbar-nav', offset: 66});

    $('.navbar-nav a').on('click', function(event){
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    $('#product-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        autoplay:true,
        smartSpeed:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })

    $('#testimonial-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        autoplay:true,
        smartSpeed:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    })
});

//Scroll Reveal Animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration:2000,
    reset: true,

})

//home
sr.reveal('.home-content',{})
sr.reveal('#home-btn',{
    delay:200,
})
sr.reveal('.home-img',{
    interval:200
})

//about
sr.reveal('.about-img',{})
sr.reveal('#about-titles',{
    delay:100,
})
sr.reveal('.about-content',{
    delay:200,
})

//features
sr.reveal('.features-item',{})



//style-switcher
function setActiveStyle(colorName){
    $('.style-switch').attr('disabled','true');
    $(".style-switch[title="+colorName+"]").removeAttr('disabled');
}


$('.toggle-style-switcher').click(function(){
    $(".style-switcher").toggleClass("open");
})


//preloader
$(window).on('load', function(){
    setTimeout(function(){
        $(".preloader").fadeOut('slow');
    }, 600);
})