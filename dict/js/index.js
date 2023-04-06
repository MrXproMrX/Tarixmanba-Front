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

// -------------------------------===========-------------------------------

$(document).ready(function(){
  (function($){
    $('.numbers').each(function(){
        $(this).prop('Counter',0).animate({
            Counter:$(this).text()
        },
        {
            duration:5000,
            easing:"swing",
            step:function(now){
                $(this).text(Math.ceil(now));
            }  
       });
    })
  })(jQuery);
});

// -------------------------------===========-------------------------------

$(function(){
  let Catalog_max__pro__ul_link = document.querySelectorAll('.search_results__pagination__link');
  for(let i = 0; i<Catalog_max__pro__ul_link.length; i++){
      Catalog_max__pro__ul_link[i].addEventListener('click',function(){
          for(let j = 0; j<Catalog_max__pro__ul_link.length;j++){
              Catalog_max__pro__ul_link[j].classList.remove('active');
          }
          this.classList.add('active');

      })
  }
});

// -------------------------------===========-------------------------------

const aboutTop = document.querySelector('.aboutTop');
if(aboutTop){
  const headerColor = document.querySelector('.header');
  headerColor.style.backgroundColor = '#A07048';
  headerColor.style.position = 'relative';
}

// -------------------------------===========-------------------------------