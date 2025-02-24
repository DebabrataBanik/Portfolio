import { items } from './data.js';

function loader() {
  let counter = document.querySelector('.counter p');
  let curCount = 0;


  function updateCounter() {
    let inc = Math.floor(Math.random() * 10) + 1;
    curCount = Math.min(curCount + inc, 100);
    counter.textContent = curCount;

    let delay = Math.floor(Math.random() * 200) + 25;
    setTimeout(updateCounter, delay);
  }
  updateCounter();
}

setTimeout(loader, 1000);

gsap.to(".counter",
  {
    opacity: 0,
    delay: 3.5,
    duration: 0.5
  }
)

let text = document.querySelector('.text');

text.innerHTML = text.textContent.replace(/\S/g, "<span class='letter'>$&</span>");


anime.timeline({
  loop: false
}).add({
  targets: '.text .letter',
  translateY: [-100, 0],
  easing: "easeInOutSine",
  duration: 100,
  delay: (el, i) => 30 * i

}).add({
  targets: '.text .letter',
  translateY: [0, 100],
  easing: "easeOutExpo",
  duration: 2000,
  delay: (el, i) => 2700 + 30 * i
});

gsap.to(".pre-loader", {
  scale: 0.5,
  ease: "power4.inOut",
  duration: 2,
  delay: 3
})


gsap.to(".loader", {
  height: "0",
  ease: "power4.inOut",
  duration: 1.5,
  delay: 3.5
})

gsap.to(".loader-bg", {
  height: "0",
  ease: "power4.inOut",
  duration: 1,
  delay: 4,
  onComplete: () => {
    document.querySelector(".site-content").style.zIndex = "1";
    document.querySelector(".social-links").style.zIndex = "2";
    document.querySelector('.container').style.zIndex = "-10";
  }
})


gsap.from(".hero h1", {
  y: 100,
  ease: "power4.inOut",
  duration: 1,
  delay: 4,
  stagger: 0.1
})


gsap.to(".footer-content", {
  opacity: 0,
  y: 50,
  duration: 0.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true,
  }
});

gsap.to(".social-links", {
  opacity: 0,
  y: 50,
  duration: 0.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true,
  }
});

window.addEventListener("load", () => {
  setTimeout(() => {
    document.body.classList.remove("preloading"); 
    document.querySelector(".pre-loader").style.display = "none";
  }, 5000);
});

gsap.to("section", {
  opacity: 1,
  zIndex: 1,
  delay: 4.5,
  duration: 0.5,
  stagger: 0.2
});

document.querySelector('.email').addEventListener('click', e => {
  navigator.clipboard.writeText(e.target.textContent)
})

const lenis = new Lenis()

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

requestAnimationFrame(raf)

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = anchor.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      lenis.scrollTo(targetElement, {
        duration: 1.2, 
        offset: 0, 
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      });
    }
  });
});