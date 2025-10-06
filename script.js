gsap.registerPlugin(ScrollTrigger);

// Scroll animations
gsap.utils.toArray(".section").forEach(sec => {
    
  gsap.from(sec, {
    y: 30,
    opacity: 0,
    duration: 0.7,
    scrollTrigger: {
      trigger: sec,
      start: "top 85%",
      toggleActions: "play none none reverse"
    }
  }
);
});

// Smooth scroll nav
document.querySelectorAll("nav button").forEach(btn => {
  btn.addEventListener("click", () => {
    const target = document.querySelector(btn.dataset.target);
    target?.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});

// Hover effect for projects
document.querySelectorAll(".project").forEach(project => {
  project.addEventListener("mouseenter", () => gsap.to(project, { scale: 1.02, duration: 0.3 }));
  project.addEventListener("mouseleave", () => gsap.to(project, { scale: 1, duration: 0.3 }));
});

// Download current HTML
document.getElementById("downloadBtn").addEventListener("click", () => {
  const html = "<!doctype html>\\n" + document.documentElement.outerHTML;
  const blob = new Blob([html], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Akash_R_Interactive_Portfolio.html";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
});
