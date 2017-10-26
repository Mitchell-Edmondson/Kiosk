var count = 0;
document.addEventListener('DOMContentLoaded', function () {
		setter();
	
	

		
      document.querySelector('button').addEventListener('click', main);      
      document.querySelector('button').addEventListener('click', makePrice);      
});



function main() {
    var source = document.getElementById('source').value;
	var questionnumber = document.getElementsByClassName("question");
    document.getElementById("result").innerHTML = "You answered " + source +
		" to question: "+ questionnumber[count].innerHTML;
	count += 1;
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
