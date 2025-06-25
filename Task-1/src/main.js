const btnLearnMore = document.querySelector(".button__js");
const contentText = document.querySelector(".container__text--state-hidden");

btnLearnMore.addEventListener("click", event => {
  if(contentText === document.querySelector(".container__text--state-hidden")){

    contentText.classList.remove(".container__text--state-hidden");
    contentText.classList.add("content-content__text--state-visible");
    btnLearnMore.textContent = "Hide";
  } else { 
    contentText.classList.remove("content-content__text--state-visible");
    contentText.classList.add("content-content__text--state-hidden");
    btnLearnMore.textContent = "Learn more";
  }

});