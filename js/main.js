jQuery(document).ready(function() {
    jQuery('.home-slider .bxslider').bxSlider({
       auto: true,
       mode: 'fade',
       caption: true,
       pagerCustom: '#bx-pager',
       controls: true,
       nextText: '<i class="fa fa-angle-right"></i>',
       prevText: '<i class="fa fa-angle-left"></i>'
    });
});

jQuery('.parallax-window').parallax({imageSrc: 'images/parallax-1.png'});

jQuery('.bxslider').bxSlider({
  minSlides: 3,
  maxSlides: 4,
  slideWidth: 170,
  slideMargin: 10
});