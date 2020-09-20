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