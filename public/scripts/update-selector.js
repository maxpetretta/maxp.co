async function updateSelector() {
  const classes = [
    "translate-x-0",
    "translate-x-full",
    "translate-x-fullx2",
    "translate-x-fullx3",
    "translate-x-fullx4",
    "translate-x-fullx5",
  ]
  const headings = [...document.querySelectorAll(".heading")]
  const options = {
    root: null,
    threshold: 0,
    rootMargin: "0px 0px -90% 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      var selector = document.getElementById("selector")

      if (entry.isIntersecting && !selector.classList.contains("clicked")) {
        var index = headings
          .map(function (el) {
            return el.id
          })
          .indexOf(entry.target.id)

        selector.classList.remove(...classes)
        selector.classList.add(classes[index])
      }
    })
  }, options)

  headings.forEach((heading) => {
    observer.observe(heading)
  })
}

updateSelector()
