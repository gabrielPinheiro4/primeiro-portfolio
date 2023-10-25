//////////////////// HOME IMG //////////////////
new hoverEffect({
    parent: document.querySelector('.home-img'),
    intensity: 0.5,  
    speedIn: 2,
    speedOut: 2,
    image1: 'assets/imgs/home-img.jpg',
    image2: 'assets/imgs/home-hover.jpg',
    displacementImage: 'assets/imgs/4.png'
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