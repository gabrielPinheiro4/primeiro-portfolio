/////////////////// SCROLL ANIMATION //////////////////////
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.panel').forEach((panel, i) =>{
    ScrollTrigger.create({
        trigger: panel,
        start: "bottom bottom",
        pin: true,
        pinSpacing: false,
    })
})

///////////////////// TEXT ANIMATION ///////////////////////
gsap.to('.front', {
  scrollTrigger: {
    trigger: '.front',
    scrub: 1,
  },
  x: 500,
})

gsap.to('.design', {
  scrollTrigger: {
    trigger: '.design',
    scrub: 1,
  },
  x: -500,
})



///////////////////// LENIS SCROLL ///////////////////////
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)