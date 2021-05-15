//   Navigation Menu JS
const navSlide = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbar-container .navbtn');
    const navLinks = document.querySelector('.navbar-container .navbtn ul li');

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');
    });
}

navSlide();