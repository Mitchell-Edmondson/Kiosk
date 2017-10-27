var count = 0;
var string = '';
document.addEventListener('DOMContentLoaded', function () {
      document.getElementById('submitButton').addEventListener('click', main);      
    	document.getElementById('a').addEventListener('click', download); 
		document.getElementById('source').addEventListener('keypress', x);
});

function x(e) {
	//'.which' -
	//'.keyCode' -
	var key = e.which || e.keyCode;
	// 13 is code for enter
	if(key == 13)
		main();
}

function main() {
	//variable source is used to display the user's answer that they entered in the textbox
   var source = document.getElementById('source').value;
	string = string + source + '\r\n'; 
	//questionlist is an array of questions from layout.html
	var questionlist = document.getElementsByClassName("question");
	//answerlist is an array of empty paragraphs from layout.html
	var answerlist = document.getElementsByClassName("answer");
	//display the user's entered answer in the result textbox
    document.getElementById("result").innerHTML = "You answered " + "'" + source + "'" +
		" to question: "+ questionlist[count].innerHTML;		
	//Changes the paragraph to the user's input
	answerlist[count].innerHTML = source;	
	//increase questioncount
	count += 1;
	questionlist[count].style.display = "block";
	//change the text to follow along with the current question
	document.getElementById("myspan").innerHTML = questionlist[count].innerHTML;
	//change the textbox to be clear again, this way the user doesn't have to delete their answer
	//each time they have to answer a question
	//document.getElementById('finalAnswer').addEventListener('onchange', builder(answerlist));
	document.getElementById('source').value = "";
}




function download() {
	var a = document.getElementById('a');		
	var file = new Blob([string], {type: 'text/plain'});
	a.href = URL.createObjectURL(file);
	a.download = 'filename.txt';
}					
