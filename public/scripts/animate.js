const entries = document.querySelectorAll(".show-on-scroll");
const options = {
  root: null,
  threshold: 0.5,
  rootMargin: '0px 0px 0px 0px'
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fade-in");
      // setTimeout(() => {entry.target.classList.add("animate-fade-in")}, 250);
      observer.unobserve(entry.target)
    }
  }) 
}, options);

entries.forEach(entry => {
  const children = entry.querySelectorAll(".fade-delay")
  children.forEach(function (child, i) {
    child.setAttribute("style", "animation-delay: " + i * 1 + "s")
  })
  entry.classList.add("opacity-0");
  observer.observe(entry);
});
