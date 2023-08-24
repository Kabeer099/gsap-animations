var tl = gsap.timeline();

tl.from(".nav>img, h4, button", {
  y: -100,
  duration: 1,
  delay: 1,
  opacity: 0,
  stagger: 0.2,
});

tl.from(".main h1", {
  y: 100,
  opacity: 0,
  stagger: 0.3,
  // duration:1
});

tl.from(".right-img, .left-img", {
  scale: 0,
  opacity: 0,
  stagger: 0.3,
});

tl.from(".main h5", {
  scale: 0,
  opacity: 0,
});

tl.to(".main h5", {
  y: 30,
  repeat:-1,
  yoyo:true,
  duration:0.7
});
