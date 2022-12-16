$(document).ready(function(){
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, options);
    });
        
    $(document).ready(function(){
      $('.sidenav').sidenav();
    });

// -------------------------------===========-------------------------------

    $(document).ready(function(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems, options);
          });
    });
  
    $(document).ready(function(){
        $(document).ready(function(){
            $('.modal').modal();
        });
    });
});

// -------------------------------===========-------------------------------

const buttons = document.querySelectorAll('.search_results__title__h2');
buttons.forEach(function(button, index) {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    
    this.parentNode.classList.toggle('active');
    
    buttons.forEach(function(button2, index2) {
      if ( index !== index2 ) {
        button2.parentNode.classList.remove('active');
      }
    });
  });
});

// -------------------------------===========-------------------------------

const buttons1 = document.querySelectorAll('.search_results_in__button');
buttons1.forEach(function(button, index) {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    
    this.parentNode.classList.toggle('active');
    
    buttons1.forEach(function(button2, index2) {
      if ( index !== index2 ) {
        button2.parentNode.classList.remove('active');
      }
    });
  });
});

// -------------------------------===========-------------------------------

var i=0;
	$(".search_results_in__bottom__menu li a").each(function(){
  length
	i++;
	$(this).attr("onclick",`slowScroll('#mrx-${+i}')`);
});

var i=0;
	$(".search_results_in__max__item").each(function(){
  length
	i++;
	$(this).attr("id","mrx-"+i);
});

function slowScroll(id){
    $('html,bode').animate({
        scrollTop:$(id).offset().top
    },500);
}

$(document).on("scroll", function(){
    if ($(window).scrollTop()===0)
  $("header").removeClass("fixed");
else 
  $("header").attr("class","fixed");
});

// -------------------------------===========-------------------------------


// =======------------------------------=======------------------------=====

var i=0;
	$(".slider__menu__link").each(function(){
  length
	i++;
	$(this).attr("href","#mrx-"+i);
});

var i=0;
	$(".slider__item").each(function(){
  length
	i++;
	$(this).attr("id","mrx-"+i);
});


// directions_in id end
$('.slider__list .slider__item').hide();
$('.slider__list .slider__item:first').show();
$('.slider__menu li:first').addClass('active');

// Change tab class and display content
$('.slider__menu a').on('click', function(event){
  event.preventDefault();
  $('.slider__menu li').removeClass('active');
  $(this).parent().addClass('active');
  $('.slider__list .slider__item').hide();
  $($(this).attr('href')).show();
});

// =======------------------------------=======------------------------=====