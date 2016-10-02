function output(value) {
  document.getElementById("num").value += value;
}

function calc() {
  document.getElementById("num").value = eval(document.getElementById("num").value);
}

function outputClear() {
  document.getElementById("num").value = '';
}
