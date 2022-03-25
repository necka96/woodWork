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

$(document).ready(function () {
  $(".count").counterUp({
    delay: 10,
    time: 1200
  })
});