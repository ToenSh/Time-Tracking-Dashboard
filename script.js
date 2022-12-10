"use strict";

const sortDaily = document.querySelector(".sort__daily");
const sortWeekly = document.querySelector(".sort__weekly");
const sortMonthly = document.querySelector(".sort__monthly");
const currentHrs = document.querySelectorAll(".card__current-hrs");
const prevHrs = document.querySelectorAll(".card__previous-hrs");

function generateDefaultData() {
  fetch("./data.json")
    .then((data) => data.json())
    .then((data) => {
      currentHrs.forEach((hr, i) => {
        hr.innerHTML = data[i].timeframes.weekly.current + "hrs";
      });
      prevHrs.forEach((hr, i) => {
        hr.innerHTML =
          "Last Week - " + data[i].timeframes.weekly.previous + "hrs";
      });
    })
    .catch((error) => console.log(error));
}

function generateDailyData() {
  fetch("./data.json")
    .then((data) => data.json())
    .then((data) => {
      currentHrs.forEach((hr, i) => {
        hr.innerHTML = data[i].timeframes.daily.current + "hrs";
      });
      prevHrs.forEach((hr, i) => {
        hr.innerHTML =
          "Last Week - " + data[i].timeframes.daily.previous + "hrs";
      });
    })
    .catch((error) => console.log(error));
}

function genereateMonthlyData() {
  fetch("./data.json")
    .then((data) => data.json())
    .then((data) => {
      currentHrs.forEach((hr, i) => {
        hr.innerHTML = data[i].timeframes.monthly.current + "hrs";
      });
      prevHrs.forEach((hr, i) => {
        hr.innerHTML =
          "Last Week - " + data[i].timeframes.monthly.previous + "hrs";
      });
    })
    .catch((error) => console.log(error));
}

window.addEventListener("DOMContentLoaded", generateDefaultData);

sortWeekly.addEventListener("click", generateDefaultData);
sortDaily.addEventListener("click", generateDailyData);
sortMonthly.addEventListener("click", genereateMonthlyData);
