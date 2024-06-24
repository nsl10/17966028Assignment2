function numberSubmit(){
	var multiplier = document.getElementById("Multiplier").value;
	for(i=1; i<11; i++){
		document.getElementById(i).innerHTML = i + " x " + multiplier + " = " + multiplier * i;
	}
}