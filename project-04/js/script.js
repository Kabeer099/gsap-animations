function time() {
  var a = 0;
  setInterval(function () {
    a = a + Math.floor(Math.random() * 10);
    if (a < 100) {
      document.querySelector(".loader h1").innerHTML=a + "%";
    }
    else{
      a=100;
      document.querySelector(".loader h1").innerHTML=a + "%";
    }
  }, 100);
}


var tl = gsap.timeline();
tl.to(".loader h1", {
  delay: 0.5,
  duration: 2,
  onStart:time()
});
tl.to(".loader", {
  top: "-200vh",
  delay: 0.5,
  duration: 1.5,
  onStart:time()
});

gsap.to(".page1 h1", {
  transform: "translateX(-100%)",
  fontWeight:100,
  scrollTrigger: {
    trigger: ".page1",
    scroll: "body",
    markers:true,
    start: "top 0",
    end: "top -100%",
    scrub:3,
    pin:true,
  },

});
