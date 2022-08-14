let elForm = document.querySelector(".form");
let elInput = document.querySelector(".input");
let inputCheck = document.querySelector(".form-check-input");
let elInputRain = document.querySelector(".form-check-rain");
let elInputGym = document.querySelector(".form-check-gym");
let resultBox = document.querySelector(".result-box");

const maxTemp = 45;
const minTemp = 10;

elForm.addEventListener("submit", function(evt){
  evt.preventDefault()

  inputValue = Number(elInput.value);
  rainResult = elInputRain.checked;
  gymResult = elInputGym.checked;
  resultTemp = document.createElement("p");
  resultBox.appendChild(resultTemp);


  if(inputValue < minTemp){
    resultTemp.textContent = "It is too cold, you can not go out."
  } else if(inputValue >= minTemp && inputValue <= maxTemp){
    resultTemp.textContent = "It is good weather today, you can go to running."
  } else if(rainResult){
    resultTemp.textContent = "It is raining, you can not go out."
  } else if(rainResult && gymResult){
    resultTemp.textContent = "You can go to running, but only to gym"
  } else if(inputValue < minTemp && inputValue >maxTemp && gymResult){
    resultTemp.textContent = "Weather is bad, only shelter can not pritect your health"
  } else if(inputValue > maxTemp){
    resultTemp.textContent = "It is too hot outside, it is better to stay at home"
  } else{
    resultTemp.textContent = "Please, enter something about weather"
  }

  elInput.value = "";
})

elForm.addEventListener("reset", function(reset){
  reset.preventDefault();

  elInput.value = "";
  resultTemp.textContent = "";
})