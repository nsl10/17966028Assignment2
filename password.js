var password = " ";
var confirm = " ";
function passwordSubmit(){
	if (password == " "){
		password = document.getElementById("password").value;
		console.log(password);
		document.getElementById("Header").innerHTML = "Please validate your password";
	}else{
		if(password != confirm){
			do{
				confirm = document.getElementById("password").value;
				//otherwise the loop will keep running
				if (password != confirm){
					document.getElementById("Header").innerHTML = "Incorrect input. Please validate your password";
					//otherwise the loop will keep running
					break;
				}
				else{
					document.getElementById("Header").innerHTML = "Your password is set, you can close this page";
				}
			}while(password != confirm);
		}
	}
}