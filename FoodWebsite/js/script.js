// Scroll to Top
const toTop = document.querySelector(".to-top")
window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100) {
        toTop.classList.add("active")
    } else {
        toTop.classList.remove("active")
    }
})

const menu = document.querySelector('#menu-bars')
const navbar = document.querySelector('.navbar')

menu.onclick = () => {
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}

window.onscroll = () => {
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
}

//Search box show - hidden
document.querySelector("#search-icon").onclick = () => {
    document.querySelector("#search-form").classList.toggle('active')
}
document.querySelector("#close").onclick = () => {
    document.querySelector("#search-form").classList.remove('active')
}

//Slider show
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
});