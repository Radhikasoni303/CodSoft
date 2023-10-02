Hamburger = document.querySelector('.Hamburger');
navbar = document.querySelector('.navbar');
rightNav = document.querySelector('.rightNav');
navlist = document.querySelector('.navlist');

Hamburger.addEventListener('click',()=>{
   rightNav.classList.toggle('v-class');
   navbar.classList.toggle('h-nav');
   navlist.classList.toggle('v-class');
});
