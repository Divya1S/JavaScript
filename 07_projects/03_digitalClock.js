// Code Link:
// https://stackblitz.com/edit/dom-project-chaiaurcode?file=2-BMICalculator%2Findex.html,3-DigitalClock%2Fchaiaurcode.js

// Solution:
const clock = document.getElementById('clock');

setInterval(function(){
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000)