const betterEval = function(string){
  return new Function('return ' + string)();
}
function addnumber(x) {
  document.getElementById("result").innerHTML += x;
}
function getResult() {
  let result = betterEval(document.getElementById("result").innerHTML);
  document.getElementById("result").innerHTML = result;
}
function deleteLast() {
  if (document.getElementById("result").innerHTML.endsWith(" ")) {
    document.getElementById("result").innerHTML = document
      .getElementById("result")
      .innerHTML.slice(0, -3);
  } else {
    document.getElementById('result').innerHTML = document.getElementById('result').innerHTML.slice(0, -1);
  }
}
