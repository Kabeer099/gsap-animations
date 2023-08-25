gsap.from(".page1 .box", {
  scale: 0,
  delay: 1,
  duration: 1,
  rotate:360,
  borderRadius:100,
});
gsap.from(".page3 .box", {
  scale: 0,
  delay: 1,
  duration: 1,
  rotate:360,
  borderRadius:100,
  scrollTrigger:{
    trigger:".page2 .box",
    scroller:"body",
    markers:true,
    // start:"top 40%",
    scrub:2
 },


});
gsap.from(".page2 .box", {
  scale: 0,
  delay: 1,
  duration: 1,
  rotate:360,
  borderRadius:100,
  scrollTrigger:{
    trigger:".page2 .box",
    scroller:"body",
    markers:true,
    // start:"top 80%",
    scrub:2
 },


});
