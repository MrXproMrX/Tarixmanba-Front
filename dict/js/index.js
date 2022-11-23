$(document).ready(function(){
      document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, options);
      });
    
      // Or with jQuery
    
      $(document).ready(function(){
        $('.sidenav').sidenav();
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