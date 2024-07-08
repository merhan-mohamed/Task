function toggleDropdown(){
    let dropDown = document.querySelector('#dropDownButton #dropdown')
    dropDown.classList.toggle('hidden')

}


const menu = document.getElementById('menu');
const menuBtn = document.getElementById('menuBtn');
const showHideMenu = () => {
  menu.classList.toggle('hidden');
};

menuBtn.addEventListener("click", showHideMenu);


var swiper = new Swiper(".mySwiper", {
    speed: 600,
    parallax: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
