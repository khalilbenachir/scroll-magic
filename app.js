const intro = document.querySelector(".intro");
const video = intro.querySelector("iframe");
const text = intro.querySelector("h1");

const section = document.querySelector("section");
const sectionText = section.querySelector("h1");

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
  duration: 500,
  triggerElement: intro,
  triggerHook: 0
})
  .addIndicators()
  .setPin(intro)

  .addTo(controller);



  //video animation


let scrollpos = 0;
let accelAmount = 0.1;
let delay = 0;


scene.on("update",e => {
    scrollpos = e.scrollPos/1000;
})

setInterval(() => {
    delay += (scrollpos - delay) * accelAmount;
    video.currentTime=delay;
}, 33.33);