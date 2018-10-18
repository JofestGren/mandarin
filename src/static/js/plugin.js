$(document).ready(function () {
    $(function() {
        $('.scroll-link').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html, body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
          }
        });
    });

    $(function () {
        $("#popupFeedbackPhone").mask("+38 (999) 999-99-99");
        $("#actionsPhone").mask("+38 (999) 999-99-99");
    })

    $('.js-actions-slider').slick({
      arrows: true,
      dots: false,
      infinite: true,
      slidesToShow: 5,
      // slidesToScroll: 1,
      prevArrow: '.actions-slider__prev',
      nextArrow: '.actions-slider__next',
      responsive: [
        {
          breakpoint: 1365,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 765,
          settings: {
            slidesToShow: 2
          }
        },
      ]
    })
});
