hamburger = document.querySelector(".hamberger");
nav = document.querySelector(".side-nav");
hamburgerClose = document.querySelector(".hamberger-close");


hamburger.onclick = function () {
  nav.classList.toggle("active");
};

hamburgerClose.onclick = function () {
  nav.classList.toggle("active");
};


const optionMenu = document.querySelector(".select-menu"),
       selectBtn = optionMenu.querySelector(".select-btn"),
       options = optionMenu.querySelectorAll(".option"),
       sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       

options.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;

        optionMenu.classList.remove("active");
    })
})


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicMainBullets: true,
    dynamicMainBullets: 3,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1360: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".testimonialsSwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
