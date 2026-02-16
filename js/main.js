/*=============== SHOW & CLOSE MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Show menu */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Hide menu */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

/*=============== REMOVE MOBILE MENU ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
   // When we click on each nav__link, we remove the show-menu class
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE HEADER STYLES ===============*/
const scrollHeader = () =>{
   const header = document.getElementById('header')
   // Add the .bg-header class if the bottom scroll of the viewport is greater than 50
   this.scrollY >= 50 ? header.classList.add('bg-header') 
                      : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
   // Add the .scroll-header class if the bottom scroll of the viewport is greater than 350
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						     : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

// Link the ID of each section (section id="home") to each link (a href="#home") 
// and activate the link with the class .active-link
const scrollActive = () => {
   // We get the position by scrolling down
   const scrollY = window.scrollY

   sections.forEach(section => {
      const id = section.id, // id of each section
            top = section.offsetTop - 50, // Distance from the top edge
            height = section.offsetHeight, // Element height
            link = document.querySelector('.nav__menu a[href*=' + id + ']') // id nav link

      if(!link) return

      link.classList.toggle('active-link', scrollY > top && scrollY <= top + height)
   })
}
window.addEventListener('scroll', scrollActive)

/*=============== PARALLAX ===============*/
if (typeof Rellax !== 'undefined' && document.querySelector('.parallax')) {
   let parallax = new Rellax('.parallax')
}

/*=============== GSAP ANIMATION ===============*/
if (typeof gsap !== 'undefined' && document.querySelector('.home__title')) {
   gsap.from('.home__village', 1.2, {opacity: 0, y: 100, delay: .1})
   gsap.from('.home__pine', 1.2, {opacity: 0, y: 150, delay: .3})
   gsap.from('.home__mountain-2', 1.2, {opacity: 0, x: 150, delay: .5})
   gsap.from('.home__mountain-3', 1.2, {opacity: 0, x: -150, delay: .6})
   gsap.from('.home__mountain-1', 1.2, {opacity: 0, y: 250, delay: .7})
   gsap.from('.home__trineo', 1.2, {opacity: 0, x: -200, delay: .8})
   gsap.from('.home__title', 1.2, {opacity: 0, y: -60, delay: 1})
}

/*=============== SCROLL REVEAL ANIMATION ===============*/
if (typeof ScrollReveal !== 'undefined') {
   const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2500,
      delay: 400,
      // reset: true // Animation repeat
   })

   sr.reveal('.about__data', {origin: 'right'})
   sr.reveal('.about__img', {origin: 'left'})
   sr.reveal('.send__card', {interval: 100})
   sr.reveal('.celebrate__data', {origin: 'left'})
   sr.reveal('.celebrate__img', {origin: 'right'})
   sr.reveal('.footer')
}

/*=============== END JS ===============*/

/*=============== 3 Press Images ===============*/


  const logo = document.getElementById('logo');
  let clicks = 0;

  if (logo) {
    logo.addEventListener('click', () => {
      clicks += 1;
      if (clicks === 3) {
        window.location.href = 'home.html';
      }
    });
  }


