async function fadeIn() {
  const entries = document.querySelectorAll(".fade, .animate-fade-in")
  const options = {
    root: null,
    threshold: 0,
    rootMargin: "0px 0px -25% 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-in")
        observer.unobserve(entry.target)
      }
    })
  }, options)

  entries.forEach((entry) => {
    const children = entry.querySelectorAll(".fade-sm, .fade-lg")
    children.forEach(function (child, i) {
      if (child.classList.contains("fade-sm")) {
        child.setAttribute("style", "animation-delay: " + i * 0.2 + "s")
      } else {
        child.setAttribute("style", "animation-delay: " + i * 0.8 + "s")
      }
    })

    entry.classList.add("opacity-0")
    if (entry.classList.contains("fade")) {
      observer.observe(entry)
    }
  })
}

fadeIn()
