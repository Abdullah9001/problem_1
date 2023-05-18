let numbers = 6;

const demoo = document.getElementById("demo");
const demoo2 = document.getElementById("demo2");

const printNumber = Math.floor(Math.random() * numbers) + 1;

demoo.innerText = `Ludo random number: ${printNumber}`;

function randomNumber(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomNumber(1, 6));

demoo2.innerText = `Ludo random number: ${randomNumber(1, 6)}`;
