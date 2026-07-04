import { gsap } from "gsap";

document.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.6 } });

  tl.fromTo(".profile-card", { opacity: 0, y: 30 }, { opacity: 1, y: 0 })
    .fromTo(".hero-name", { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, "-=0.3")
    .fromTo(".hero-subtitle", { opacity: 0, y: 15 }, { opacity: 1, y: 0 }, "-=0.35")
    .fromTo(".hero-p1", { opacity: 0, y: 15 }, { opacity: 1, y: 0 }, "-=0.25")
    .fromTo(".hero-p2", { opacity: 0, y: 15 }, { opacity: 1, y: 0 }, "-=0.3")
    .fromTo(".nav-link", { opacity: 0, x: -10 }, { opacity: 1, x: 0, stagger: 0.05, duration: 0.3 }, "-=0.15")
    .fromTo(".social-icon", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, stagger: 0.04, duration: 0.3 }, "-=0.2");
});
