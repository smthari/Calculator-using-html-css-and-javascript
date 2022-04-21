const result = document.getElementById("resultText");
const calculation = document.getElementById("calculationText");

/* function to insert number onclick */
function insert(num) {
  calculation.textContent += num;
  // console.log((calculation.textContent += num));
  console.log(num);
}

// targeting clear button by id and assigning a blank value to the calculation and 0 to result on click event listner
document.getElementById("clear").addEventListener("click", function () {
  calculation.textContent = "";
  result.textContent = 0;
});

// targeting equal button by id and assigning a blank value to the calculation and 0 to result on click event listner
document.getElementById("equal").addEventListener("click", function () {
  var exp = calculation.textContent;
  result.textContent = eval(exp);
  calculation.textContent = result.textContent;
});

// targeting back button by id and specifying  value of calculation to exp variable
// then specifying calculation by substring exp variable from 0 to (length of exp -1 )
document.getElementById("back").addEventListener("click", function () {
  var exp = calculation.textContent;
  calculation.textContent = exp.substring(0, exp.length - 1);
});
