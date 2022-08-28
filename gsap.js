gsap
  .timeline({
    scrollTrigger: {
      trigger: "#top",
      start: "top 80%",
      end: "top ",
      // markers: true,
    },
  })
  .to(".top-ttl", {
    opacity:1,
    duration: 0.8,
  })
  .to(".top-txt", {
    opacity: 1,
    duration: 0.8,
  });