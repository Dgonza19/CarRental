"use strict";

window.onload = init

function init() {
  const estTotalBtn = document.getElementById("estTotalBtn");
  estTotalBtn.onclick = estTotalBtnClicked;
}

function estTotalBtnClicked() {
  const inputNumDays = document.getElementById("inputNumDays");
  let numOfDays = Number(inputNumDays.value);


let options = 0;

let checkTollTag = document.getElementById("checkTollTag").checked;
if (checkTollTag) { 
  options += 3.95;
}

let checkGps = document.getElementById("checkGps").checked;
if (checkGps) { 
  options += 2.95;
}

let checkRoadside = document.getElementById("checkRoadside").checked;
if (checkRoadside) {
  options += 2.95;
}

let yesBtn = document.getElementById("yesBtn");
let noBtn = document.getElementById("noBtn");

let under25;
if (noBtn.checked) {
  under25 = 0;
}
else if (yesBtn.checked) {
  under25 = .30;
}

let carRentalRate = 29.99

let carRentalBase = carRentalRate * numOfDays;
let optionsAdded = options * numOfDays;
let under25Value = carRentalBase * under25;

let totalDue = carRentalBase + optionsAdded + under25Value;

const outputCarRental = document.getElementById("outputCarRental");
const outputOptions = document.getElementById("outputOptions");
const outputUnder25 = document.getElementById("outputUnder25");

const outputTotalCharge = document.getElementById("outputTotalCharge");

outputCarRental.innerHTML = "$" + carRentalBase.toFixed(2);
outputOptions.innerHTML = "$" + optionsAdded.toFixed(2);
outputUnder25.innerHTML = "$" + under25Value.toFixed(2);

outputTotalCharge.innerHTML = "$" + totalDue.toFixed(2);

}