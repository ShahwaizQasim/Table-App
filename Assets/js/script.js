
let userInput = document.querySelector("#table");
let printTable = document.querySelector("#table-print"); // jahan table print hoga uss element ko select kiya hai
let form = document.querySelector("#form-table");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let tableOf = userInput.value;
  let user_number = Number(tableOf);
  if (String(user_number) === "NaN") { // agr user input me string daly ga tw ye if chalega 
    alert("Only Number Allow");
    form.reset(); 
  }else{
  printTable.innerHTML = "";
  for (let i = 1; i <= 12; i++) {
    printTable.innerHTML += `${tableOf} x ${i} = ${tableOf * i} <br/>`;
  }
  form.reset(); // user se value lene ky bad input ko khali kr deta hai ye function
}
});
