gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.panel').forEach((panel, i) =>{
    ScrollTrigger.create({
        trigger: panel,
        start: "bottom bottom",
        pin: true,
        pinSpacing: false,
    })
})


const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)