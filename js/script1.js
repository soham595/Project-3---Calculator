var outputBox = document.getElementById('num');
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');
var zero = document.getElementById('zero');
var plus = document.getElementById('plus');
var min = document.getElementById('min');
var mod = document.getElementById('mod');
var mul = document.getElementById('mul');
var div = document.getElementById('div');
var eq = document.getElementById('eq');
var ac = document.getElementById('ac');
var ce = document.getElementById('ce');
var dot = document.getElementById('dot');
var x;
var y;

one.addEventListener("click",function(){
	num = 1;
	output(num);
});

two.addEventListener("click",function(){
	num = 2;
	output(num);
});

three.addEventListener("click",function(){
	num = 3;
	output(num);
});

four.addEventListener("click",function(){
	num = 4;
	output(num);
});

five.addEventListener("click",function(){
	num = 5;
	output(num);
});

six.addEventListener("click",function(){
	num = 6;
	output(num);
});

seven.addEventListener("click",function(){
	num = 7;
	output(num);
});

eight.addEventListener("click",function(){
	num = 8;
	output(num);
});

nine.addEventListener("click",function(){
	num = 9;
	output(num);
});

zero.addEventListener("click",function(){
	num = 0;
	output(num);
});

plus.addEventListener("click",function(){
	num = '+';
	output(num);
});

min.addEventListener("click",function(){
	num = '-';
	output(num);
});

mul.addEventListener("click",function(){
	num = '*';
	output(num);
});

div.addEventListener("click",function(){
	num = '/';
	output(num);
});

dot.addEventListener("click",function(){
	num = '.';
	output(num);
});

mod.addEventListener("click",function(){
	num = '%';
	output(num);
});

eq.addEventListener("click",function(){
	calc();
});

ac.addEventListener("click",function(){
	num = '';
	outputClear(num);
});

ce.addEventListener("click",function(){
	clearEntry(num);
});

function output() {
		x = num;
	  outputBox.innerHTML += x;
}

function outputClear() {
	outputBox.innerHTML = num;
}

function clearEntry() {
	outputBox.innerHTML = x;
}

function calc() {
	outputBox.innerHTML = eval(outputBox.value);
}
