var count = 0;
document.addEventListener('DOMContentLoaded', function () {
		setter();
				
      document.querySelector('button').addEventListener('click', main);      
      document.querySelector('button').addEventListener('click', makePrice);      
});



function main() {
	//variable source is used to display the user's answer that they entered in the textbox
    var source = document.getElementById('source').value;
	//questionlist is an array of questions from layout.html
	var questionlist = document.getElementsByClassName("question");
	//display the user's entered answer in the result textbox
    document.getElementById("result").innerHTML = "You answered " + "'" + source + "'" +
		" to question: "+ questionlist[count].innerHTML;
	//increase questioncount
	count += 1;
	//change the text to follow along with the current question
	document.getElementById("myspan").innerHTML = questionlist[count].innerHTML;
	//change the textbox to be clear again, this way the user doesn't have to delete their answer
	//each time they have to answer a question
	document.getElementById('source').value = "";
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

