$('.products').slick({
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: '.woocomerce__slider-slideButtonPrev',
  nextArrow: '.woocomerce__slider-slideButtonNext',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        dots: false
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        dots: false
      }
    }
  ]
});
$('.popular__slider').slick({
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: '.popular__slideButtonPrev',
  nextArrow: '.popular__slideButtonNext',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        dots: false
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        dots: false
      }
    }
  ]
});

$('.newItems__slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 2,
  dots: true,
  prevArrow: '.newItems__slideButtonPrev',
  nextArrow: '.newItems__slideButtonNext',

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        dots: false
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        dots: false
      }
    }
  ]
});

$('.instagram__items').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  dots: false,

  responsive: [
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

$('.stock__sliders').slick({
  // arrows: false,
  autoplay: true,
  prevArrow: '.stock__slideButtonPrev',
  nextArrow: '.stock__slideButtonNext',

  responsive: [
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});

$('.sponsor__items').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 2,
  // arrows: false,
  // dots: true,
  prevArrow: '.sponsor__slideButtonPrev',
  nextArrow: '.sponsor__slideButtonNext',

  responsive: [
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});



$('.articles__slider').slick({
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  // autoplay: true,
  prevArrow: '.articles__slideButtonPrev',
  nextArrow: '.articles__slideButtonNext',

  responsive: [
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        dots: false,
        autoplay: true
      }
    }
  ]
});


$('.reviews__items').slick({
  // arrows: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  dots: false,
  prevArrow: '.reviews__slideButtonPrev',
  nextArrow: '.reviews__slideButtonNext',


  responsive: [
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 2
        }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

$('.recommend__slider').slick({
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: '.recommend__slideButtonPrev-2',
  nextArrow: '.recommend__slideButtonNext-2',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        dots: false
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        dots: false
      }
    }
  ]
});

$('.similar__slider').slick({
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: '.similar__slideButtonPrev-2',
  nextArrow: '.similar__slideButtonNext-2',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        dots: false
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        dots: false
      }
    }
  ]
});

$('.product__gallery').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [
        {
            breakpoint: 500,
            settings: {
                // unslick: false,
                slidesToShow: 1
            }
        }
    ]
});

window.addEventListener("resize", function() {
    if (window.matchMedia("(max-width: 500px)").matches) {
      console.log("меньше");
        document.querySelector('.product__gallery').classList.add('slider');
    } else {
        console.log("больше");
        document.querySelector('.product__gallery').classList.remove('slider');
    }
});

$('.slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,

  responsive: [
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

var btn = $('#scrollTop-button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 3000) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

$(function() {
 
  (function quantityProducts() {
    var $quantityArrowMinus = $(".quantity-arrow-minus");
    var $quantityArrowPlus = $(".quantity-arrow-plus");
    var $quantityNum = $(".quantity-num");
 
    $quantityArrowMinus.click(quantityMinus);
    $quantityArrowPlus.click(quantityPlus);
 
    function quantityMinus() {
      if ($quantityNum.val() > 1) {
        $quantityNum.val(+$quantityNum.val() - 1);
      }
    }
 
    function quantityPlus() {
      $quantityNum.val(+$quantityNum.val() + 1);
    }
  })();
 
});

$(document).ready(function() {

  $(window).resize(function(){
    var windowWidth = $('body').innerWidth();
    if(windowWidth < 580){
      document.querySelectorAll('.catalog__item').forEach(item => {
        item.classList.remove('catalog__row-page-item');
      });
      document.querySelector('#block-button').classList.add('active');
      document.querySelector('#row-button').classList.remove('active');
    }
  });
});

const openProductData = () => {
    let listDataBtn = document.querySelectorAll('.openCloseBtn'),
        listItemContent = document.querySelectorAll('.openCloseContent'),
        atribute,
        listIcon,
        activeClass;

    listDataBtn.forEach(item => {
        item.addEventListener("click", function() {
            listIcon = this.querySelector('.buttonIcon');
            atribute = this.getAttribute('data-list-item');

            listItemContent.forEach(contentItem => {
                activeClass = contentItem.classList.contains('active');

                if(contentItem.classList.contains(atribute) && activeClass == false) {
                    contentItem.classList.add('active');
                    listIcon.classList.add('active');        
                } else if(contentItem.classList.contains(atribute) && activeClass == true) {
                    contentItem.classList.remove('active');
                    listIcon.classList.remove('active');
                }
            });
        });
    });
}

openProductData();

const openAreaMenu = () => {
    let listDataBtn = document.querySelectorAll('.area__navItem'),
        listItemContent = document.querySelectorAll('.areaContent'),
        atribute,
        activeClass;

    listDataBtn.forEach(item => {
        item.addEventListener("click", function() {
            atribute = this.getAttribute('data-list-item');

            listItemContent.forEach(contentItem => {
                activeClass = contentItem.classList.contains('active');
                contentItem.classList.contains(atribute) && activeClass == false ? contentItem.classList.add('active') : contentItem.classList.remove('active');
            });
        });
    });
}

openAreaMenu();