// topページのopacity制御
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
    duration: 1.0,
  })
  .to(".top-txt", {
    opacity: 1,
    duration: 0.8,
  });

  // conceptテキストのopacity制御
  gsap
  .timeline({
    scrollTrigger: {
      trigger: "#concept",
      start: "center 50%",
      end: "bottom 100%",
      // markers: true,
    },
  })
  .to(".concept-ttl, .concept-sub-ttl", {
    opacity:1,
    duration: 0.8,
  })
  .to(".concept-txt", {
    opacity: 1,
    duration: 0.8,
  });
