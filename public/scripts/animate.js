const entries = document.querySelectorAll(".show-on-scroll");
const options = {
  root: null,
  threshold: 0,
  rootMargin: '0px 0px -200px 0px'
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fade-in")
      observer.unobserve(entry.target)
    }
  }) 
}, options);

entries.forEach(entry => {
  // const children = entry.querySelectorAll(".fade-delay")
  // children.forEach(function (child, i) {
  //   child.setAttribute("style", "transition-delay: " + i * 0.5 + "s")
  // })
  entry.classList.add("opacity-0");
  observer.observe(entry);
});
