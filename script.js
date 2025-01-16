document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector("nav");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
      if (window.scrollY > lastScrollY) {
          // Scrolling down
          nav.classList.add("hidden");
      } else {
          // Scrolling up
          nav.classList.remove("hidden");
      }
      lastScrollY = window.scrollY;
  });
});

// First Timeline - Trigger on scrolling down
var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".two",
      start: "0% 95%",
      end: "70% 50%",
      scrub: true,
      // Uncomment the markers below for debugging
      // markers: true,
    }
  });
  
  tl.to("#fanta", { top: "120%", left: "0%" }, "orange")
    .to("#orange-cut", { top: "160%", left: "23%" }, "orange")
    .to("#orange", { width: "15%", top: "160%", right: "10%" }, "orange")
    .to("#leaf", { top: "110%", rotate: "130deg", left: "70%" }, "orange")
    .to("#leaf2", { top: "110%", rotate: "130deg", left: "0%" }, "orange");
  
  // Second Timeline - Trigger on reverse scrolling
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".three",
      start: "0% 95%",
      end: "20% 50%",
      scrub: true,
      // Uncomment the markers below for debugging
      // markers: true,
      onEnterBack: () => tl2.play(), // Ensure reverse scrolling triggers this timeline
      onLeave: () => tl2.pause(),    // Pause when scrolling away from the trigger area
    }
  });
  
  tl2.from(".lemon1", { rotate: "-90deg", left: "-100%", top: "110%" }, "ca")
    .from("#cocacola", { rotate: "-90deg", top: "110%", left: "-100%" }, "ca")
    .from(".lemon2", { rotate: "90deg", left: "100%", top: "110%" }, "ca")
    .from("#pepsi", { rotate: "90deg", top: "110%", left: "100%" }, "ca")
    .to("#orange-cut", { width: "18%", left: "42%", top: "204%" }, "ca")
    .to("#fanta", { width: "35%", top: "210%", left: "33%" }, "ca");

