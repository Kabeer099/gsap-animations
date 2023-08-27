var tl = gsap.timeline();
tl.from(".nav", {
  width: 0,
  delay: 2,
});

tl.from(".nav h1, .nav h3, .nav h4", {
  y: -80,
  oacity: 0,
  duration: 0.8,
  stagger: 0.4,
});

tl.from(".left h1", {
  x: -100,
  opacity: 0,
  duration: 0.5,
  stagger: 0.4,
});
tl.from(".right img", {
  scale: 0.5,
  opacity: 0,
  duration: 0.5,
});

tl.from(".page2 .box", {
  scale: 0,
  opacity: 0,
  duration: 1,
  stagger:0.3,
  scrollTrigger:{
    trigger:".page2 .box",
    scroll: "body",
    markers:true,
    start:"top 70%",
    end: "bottom 40%"
  }
});
