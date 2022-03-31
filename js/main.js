const selectElement = selector => {
 const element = document.querySelector(selector)
 if(element) return element
 throw new Error(`uverite se da li ovaj ${selector} postoiji ili da li je pravilno napisan`)
}
const menu = selectElement(".menu")

menu.addEventListener("click", ()=>{
 menu.classList.toggle("active")
})

const scroll = () => {
const nav = selectElement(".nav")
if(this.scrollY >= 15){
 nav.classList.add("activated")
}else{
 nav.classList.remove("activated")
}
}
window.addEventListener("scroll", scroll)
// swiper
var swiper = new Swiper(".header-swiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: true,
        loop: true
      });
// counter
  var swiper = new Swiper(".home-swiper", {
        slidesPerView: 1,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
         breakpoints: {
          "@0.00": {
            slidesPerView: 1,
      
          },
          "@0.75": {
            slidesPerView: 2,
      
          },
          "@1.00": {
            slidesPerView: 3,
         
          },
          "@1.50": {
            slidesPerView: 4,
         
          },
        },
      });

$(document).ready(function () {
  $(".count").counterUp({
    delay: 10,
    time: 1200
  })
});
   $(document).ready(function () {
            $('.responsive-testimonials').responsiveTestimonials();
        });

const questions = document.querySelectorAll(".question")
questions.forEach(question => {
  const btn = question.querySelector(".question-btn")
  btn.addEventListener("click", ()=>{
    questions.forEach(item => {
      if(item !== question){
        item.classList.remove("active")
       
      }
    })
    question.classList.toggle("active")
        
  })
})
jQuery(document).ready(function($){
	//create the slider
	$('.cd-testimonials-wrapper').flexslider({
		selector: ".cd-testimonials > li",
		animation: "slide",
		controlNav: false,
		slideshow: false,
		smoothHeight: true,
		start: function(){
			$('.cd-testimonials').children('li').css({
				'opacity': 1,
				'position': 'relative'
			});
		}
	});

	//open the testimonials modal page
	$('.cd-see-all').on('click', function(){
		$('.cd-testimonials-all').addClass('is-visible');
	});

	//close the testimonials modal page
	$('.cd-testimonials-all .close-btn').on('click', function(){
		$('.cd-testimonials-all').removeClass('is-visible');
	});
	$(document).keyup(function(event){
		//check if user has pressed 'Esc'
    	if(event.which=='27'){
    		$('.cd-testimonials-all').removeClass('is-visible');	
	    }
    });
    
	//build the grid for the testimonials modal page
	$('.cd-testimonials-all-wrapper').children('ul').masonry({
  		itemSelector: '.cd-testimonials-item'
	});
});