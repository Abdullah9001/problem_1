// First problem
let numbers = 6;

const demoo = document.getElementById("demo");
const demoo2 = document.getElementById("demo2");
const demoo3 = document.getElementById("demo3");
const demoo4 = document.getElementById("demo4");

const printNumber = Math.floor(Math.random() * numbers) + 1;

demoo.innerText = `Ludo random number: ${printNumber}`;

function randomNumber(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

demoo2.innerText = `Ludo random number: ${randomNumber(1, 6)}`;
// Solved

// // Second problem
const students = [
  "Grace",
  "Alice",
  "Frank",
  "Jack",
  "David",
  "Eve",
  "Charlie",
  "Bob",
  "Isaac",
  "Hannah",
];

const sortingPrint = students.sort();
for (let i = 0; i < sortingPrint.length; i++) {
  const element = sortingPrint[i];
  const list = document.createElement("li");
  list.innerText = element;
  demoo3.appendChild(list);
}
// Second Problem done

// third problem

const rollNumber = [5, 6, 9, 15, 10, 11, 4, 3, 8, 1, 2, 7, 12, 13, 14];

function sortingRollFunction(a, b) {
  return a - b;
}
const sortingRoll = rollNumber.sort(sortingRollFunction);
demoo4.innerText = `Ludo random number: ${sortingRoll}`;
// third problem done
