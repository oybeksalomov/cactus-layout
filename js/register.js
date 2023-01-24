"use strict"

const firstTab = document.querySelector("#firstTab"),
  firstTabInput = firstTab.querySelectorAll("input"),
  secondTab = document.querySelector("#secondTab"),
  secondTabInput = secondTab.querySelectorAll("input"),
  submitBtn = document.querySelector("#submitBtn"),
  nextPrevBtn = document.querySelector("#nextPrevBtn"),
  step = document.querySelectorAll('.step')

submitBtn.addEventListener('click', () => {
  secondTabInput.forEach(element => {
    if(element.value == false) {
      element.classList.add('invalid')
    } else {
      element.classList.remove('invalid')
    }
  })

})
nextPrevBtn.addEventListener('click', () => {

  firstTabInput.forEach(element => {
    if(element.value == false) {
      element.classList.add('invalid')
    } else {
      element.classList.remove('invalid')
      secondTab.classList.toggle('hideElem')
      firstTab.classList.toggle('hideElem')
      submitBtn.classList.toggle('hideElem') 
      step[0].classList.toggle('activeStep')
      step[1].classList.toggle('activeStep')
    }
  })

  nexPrev()
})

function nexPrev() {
  if(firstTab.className !== "tab") {
    nextPrevBtn.innerHTML = "Orqaga"
  } else {
    nextPrevBtn.innerHTML = "Keyingi"
  }
}
