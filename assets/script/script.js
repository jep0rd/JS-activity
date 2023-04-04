let messageEl = document.querySelector("#num-el");
let message2El = document.querySelector("#num2-el");
let message3El = document.querySelector("#num3-el");

// integer checker
function intChecker(){
  let num = document.querySelector("#numValue").value;
  if(num < 0 ){
    messageEl.textContent = num + " " + "is a NEGATIVE number";
  } else if (num > 0){
    messageEl.textContent = num + " " + "is a POSITIVE number";
  } else if (parseFloat(num) === 0){
    messageEl.textContent = num + " " + "is neither POSITIVE nor NEGATIVE";
  } else {
    messageEl.textContent = " ";
  }
}

//  parity checker
function parityChecker(){
  let num2 = document.querySelector("#num2Value").value;
  if(parseFloat(num2) % 2 == 0){
    message2El.textContent = num2 + " " + "is an EVEN number";
  } else if (num2 % 2 !== 0){
    message2El.textContent = num2 + " " + "is an ODD number";
  } else {
    message2El.textContent = " ";
  }
}


// voter eligiblity


function greeting(){
  let firstName = document.querySelector("#first-name").value;
  let lastName = document.querySelector("#last-name").value;
  message = "Welcome " + firstName + " " + lastName + "!";
  message3El.textContent = message;
}

let isEligble = false;
let data = false;
function eligibility(){
  let firstName = document.querySelector("#first-name").value;
  let lastName = document.querySelector("#last-name").value;
  let age = document.querySelector("#age").value;
  let residency = document.querySelector('input[name="rRadio"]:checked');
  let citizen = document.querySelector('input[name="cRadio"]:checked');

  if(age >= 18 && residency.value == "yes" && citizen.value == "yes"){
    isEligble = true;
  } else if(age === "" || residency.value === null || citizen.value === null){
    isEligble = false;
    data = false;
  } else{
    isEligble = false;
    data = true;
  }
}

function submitForm(){
  if(isEligble === true){
    message3El.textContent = "You are eligible to vote!";
  } else if(data === false){
    message3El.textContent = "Not enough data";
  } else{
    message3El.textContent = "You are not eligible to vote";
  }
}
