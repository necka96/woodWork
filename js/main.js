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