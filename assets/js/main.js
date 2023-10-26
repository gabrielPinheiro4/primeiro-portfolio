//////////////////// HOME IMG //////////////////
new hoverEffect({
    parent: document.querySelector('.home-img'),
    intensity: 0.5,  
    speedIn: 2,
    speedOut: 2,
    image1: 'assets/imgs/home-img.jpg',
    image2: 'assets/imgs/home-img.jpg',
    displacementImage: 'assets/imgs/4.png'
})



///////////// PROJETOS HORIZONTAL SCROLL ////////////
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
})


////////////////////// LENIS SCROLL /////////////////
const lenis = new Lenis()

lenis.on('scroll', (e) => {

})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)