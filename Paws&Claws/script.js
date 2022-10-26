// revealing sections

const allSrctions = document.querySelectorAll(".section");

// callback function
const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};
// options object
const revealOpt = {
  root: null,
  threshold: 0.1,
};
// observer
const sectionObserver = new IntersectionObserver(revealSection, revealOpt);

allSrctions.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

////////////////////////////////////////////////////////

const btn = document.querySelector(".hamburger");
const nav = document.querySelector(".main-nav-list");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("opend");
});
