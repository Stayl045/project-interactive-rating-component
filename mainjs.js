// Page Switch
const mainArticle = document.querySelector("[main-article]");
const cardSteps = [...mainArticle.querySelectorAll("[card-step]")];

let currentStep = cardSteps.findIndex(step => {
  return step.classList.contains("active");
});

if (currentStep < 0) {
  currentStep = 0;
  showCurrentStep()
}

mainArticle.addEventListener("click", e => {
  if (e.target.matches("[button-next]")) {
    currentStep += 1
  } else if (e.target.matches("[button-previous]")) {
    currentStep -= 1
  } 
  showCurrentStep()
})

function showCurrentStep() {
  cardSteps.forEach((step,index) => {
    step.classList.toggle("active", index === currentStep)

  })
}

// Number-Click

// document.querySelectorAll(.item).forEach(elem => elem,addEventListener('click', active)) 




// function active () {

// }