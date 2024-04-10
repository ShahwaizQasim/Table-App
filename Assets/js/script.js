let userInput = document.querySelector("#table");
let printTable = document.querySelector("#table-print");
let form = document.querySelector("#form-table");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let tableOf = userInput.value;
  printTable.innerHTML = "";
  for (let i = 1; i <= 12; i++) {
    printTable.innerHTML += `${tableOf} x ${i} = ${tableOf * i} <br/>`;
  }
});
