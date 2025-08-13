import greet, { add, multiply } from './mathsutils.js';

const outputDiv = document.getElementById("output");

function showResult(text) {
  const p = document.createElement("p");
  p.className = "result";
  p.textContent = text;
  outputDiv.appendChild(p);
}

showResult(greet("Arjun"));
showResult(`5 + 3 = ${add(5, 3)}`);
showResult(`4 × 6 = ${multiply(4, 6)}`);
