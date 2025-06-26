const divBtnLearnMore = document.querySelector(".container__button");
const btnLearnMore = document.querySelector(".button__js");
const contentText = document.querySelector(".container__text-p--state-hidden");

btnLearnMore.addEventListener("click", event => {
  if(contentText === document.querySelector(".container__text-p--state-hidden")){

    contentText.classList.remove("container__text-p--state-hidden");
    console.log("removed state hidden");
    contentText.classList.add("container__text-p--state-visible");
    divBtnLearnMore.remove();
  } else { 
    contentText.classList.remove("container__text--state-visible");
    contentText.classList.add("container__text--state-hidden");
    btnLearnMore.textContent = "Learn more";
  }

});

const section = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle("section--show", entry.isIntersecting)
  })
}, {
  threshold: 0.5,
})

section.forEach(section => {
  observer.observe(section)
})