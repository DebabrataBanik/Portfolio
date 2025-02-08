function loader(){
  let counter = document.querySelector('.counter p');
  let curCount = 0;

  function updateCounter(){
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

gsap.to(".loader-bg",{
  height: "0",
  ease: "power4.inOut",
  duration: 1,
  delay: 4,
  onComplete: () => {
    document.querySelector(".site-content").style.zIndex = "1";
    document.querySelector(".social-links").style.zIndex = "2";
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


gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".projects",
  start: "top center",
  onEnter: () => {

    gsap.to(".nav-list", {
      ease: "power2.out",
      onComplete: () => {

        document.querySelector(".nav-list").classList.add("top-left");
      }
    });
    gsap.to(".logo", {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        document.querySelector(".logo").style.display = "none";
      }
    });
  },
  onLeaveBack: () => {

    document.querySelector(".nav-list").classList.remove("top-left");

    gsap.to(".nav-list", {
      ease: "power2.out"
    });

    document.querySelector(".logo").style.display = "block";
    gsap.to(".logo", { opacity: 1, duration: 0.5 });
  }
});
