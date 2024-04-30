function addnumber(x) {
  document.getElementById("result").innerHTML += x;
}
function getResult() {
  let result = eval(document.getElementById("result").innerHTML);
  document.getElementById("result").innerHTML = result;
}
