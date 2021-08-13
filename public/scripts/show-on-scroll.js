async function showOnScroll() {
  const entries = document.querySelectorAll(".show-on-scroll, .fade-delay-sm, .fade-delay-lg");
  const options = {
    root: null,
    threshold: 0,
    rootMargin: '0px 0px -25% 0px'
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-in");
        observer.unobserve(entry.target)
      }
    }) 
  }, options);

  entries.forEach(entry => {
    const children = entry.querySelectorAll(".fade-delay-sm, .fade-delay-lg")
    children.forEach(function (child, i) {
      if (child.classList.contains("fade-delay-sm")) {
        child.setAttribute("style", "animation-delay: " + i * 0.2 + "s")
      } else {
        child.setAttribute("style", "animation-delay: " + i * 1.0 + "s")
      }
    })
    entry.classList.add("opacity-0");
    observer.observe(entry);
  });
}

showOnScroll();
