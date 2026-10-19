gsap.to(".card", {
  opacity: 1,
  scale: 1,
  duration: 2,
  x: "0rem",
  onComplete: () => {
    gsap.to(".card", {
      y: "-3rem",
      yoyo: true,
      duration: 1,
      repeat: 2,
      onComplete: () => {
        gsap.to(".card", {
          x: "10rem",
          duration: 2,
        });
      },
    });
  },
});
