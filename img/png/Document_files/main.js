$('.popular__slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 2,
  dots: true
});

$('.newItems__slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 2,
  dots: true
});

$('.stock__card').slick({
	autoplay: true
});



$('.articles__slider').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
	autoplay: true
});

var btn = $('#scrollTop-button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});