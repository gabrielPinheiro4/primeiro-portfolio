//////////////////////// NAV LINKS /////////////////////////////////
function scrollNav(evento){
  evento.preventDefault();

  const hrefNav = evento.currentTarget.getAttribute('href');
  const section = document.querySelector(hrefNav);

  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

const navLinks = document.querySelectorAll('.js-menu a[href^="#"]');
navLinks.forEach((item, i) => {
  item.addEventListener('click', scrollNav);
})
////////////////////////// PARALLAX IMAGE ////////////////////////////
gsap.utils.toArray(".home-img .parallax-content").forEach((section) => {
  const heightDiff = section.offsetHeight - section.parentElement.offsetHeight;
  
  gsap.fromTo(section,{ 
    y: -heightDiff
  }, {
    scrollTrigger: {
      trigger: section,
      scrub: true
    },
    y: 0,
    ease: "none"
  });
});
///////////////// SOBRE TEXT ANIMATION ////////////////
const sobre = new SplitType('.reveal-type', {types: 'char, words'});
gsap.to(sobre.chars, {
  scrollTrigger: {
    trigger: '.sobre',
    start: 'top 80%',
  },
  y:0,
  stagger: 0.01,
});
///////////// PROJETOS HORIZONTAL SCROLL ////////////
if(window.matchMedia('(min-width: 641px)').matches){

  const projetos = document.querySelectorAll('.projeto');

  gsap.to(projetos, {
    xPercent: -100 * (projetos.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: '.projetos-link',
      pin: true,
      scrub: true,
      end: () => '+=' + document.querySelector('.projetos-link').offsetWidth
    }
  });

}
////////////////////// LENIS SCROLL /////////////////
const lenis = new Lenis()

lenis.on('scroll', (e) => {

})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)