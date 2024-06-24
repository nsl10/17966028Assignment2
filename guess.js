var luckyNum = Math.floor(Math.random()*10+1);
console.log(luckyNum);
var x=0;
function guessSubmit(){
	var guess = document.getElementById("Guess").value;
	/*
	once guess is correct it will not run the loop again.
	*/
	while(document.getElementById("response").innerHTML != "Correct!"){
		if (luckyNum == guess){
			document.getElementById("response").innerHTML = "Correct!";
			document.getElementById("response2").innerHTML = "Your guess of "+ guess + " was correct!";
		}else{
			document.getElementById("response").innerHTML = "Incorrect! Try again";
		break;
		}
	}
}