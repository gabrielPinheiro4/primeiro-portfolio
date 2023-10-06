gsap.registerPlugin(ScrollTrigger);


/////////////////// ABOUT TEXT ANIMATION //////////////////////
const splitTypes = document.querySelectorAll('.reveal-type');
splitTypes.forEach((char, i) => {

  const text = new SplitType(char, {types: 'chars'})

  gsap.from(text.chars, {
    scrollTrigger: {
      trigger: char,
      start: 'top 80%',
      end: 'top 20%',
      scrub: 1,
    },
    opacity: 0.2,
    stagger: 0.1,
  },

  )

})


/////////////////// ABOUT TEXT ANIMATION //////////////////////
const desc = document.querySelectorAll('.desc');
desc.forEach((char, i) => {

  const text = new SplitType(char, {types: 'chars'})

  gsap.from(text.chars, {
    scrollTrigger: {
      trigger: char,
      start: 'center 80%',
      end: 'top 20%',
      scrub: true,
    },
    scaleY: 0,
    y:-20,
    transformOrigin: 'top',
    stagger: 0.1,
  },

  )

})


/////////////////////////LINK MAGNECTICO /////////////////////////
let link = document.querySelectorAll('.link-mag').forEach(link => {
  link.addEventListener('mousemove', (e => {
    let x = e.offsetX;
    let y = e.offsetY;
    let linkWidth = link.clientWidth;
    let linkHeight = link.clientHeight;
    let transX = (x - linkWidth /2);
    let transY = (y - linkHeight/2);
    link.style.transform = `translateX(${transX}px) translateY(${transY}px)`;


  }))
    link.addEventListener('mouseout', (e) => {
      link.style.transform = '';
    })
})


/////////////// TEXT ANIMATION////////////////////////////
gsap.to('.anima', {
  scrollTrigger: {
    trigger: '.anima',
    scrub: 1,
  },
  x: -1000,
})




/////////////////// SCROLL ANIMATION //////////////////////


gsap.utils.toArray('.panel').forEach((panel, i) =>{
    ScrollTrigger.create({
        trigger: panel,
        start: "bottom bottom",
        pin: true,
        pinSpacing: false,
    })
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