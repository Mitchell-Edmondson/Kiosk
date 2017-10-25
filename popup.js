document.addEventListener('DOMContentLoaded', function () {
		setter();
      document.querySelector('button').addEventListener('click', main);      
      document.querySelector('button').addEventListener('click', makePrice);      
});
function main() {
    var source = document.getElementById('source').value;
    document.getElementById("result").innerHTML = source;
}
function makePrice() {
	var price, quantity, total;
	
	price = 5;
	quantity = 14;
	total = price * quantity;
	
	var el = document.getElementById('cost');
	el.textContent = '$' + total;
}
function setter() {
	var bar = document.getElementById('autoSet');
	bar.textContent = 'Should appear at startup.';
}
