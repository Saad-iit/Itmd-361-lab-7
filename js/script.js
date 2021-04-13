function init(){
	var entry = document.getElementById("entrybutton");
	var txtInput = document.getElementById("entryinput");
	var txtOutput = document.getElementById("textoutput");
	
	function start(){
		alert("Saad: " + txtInput.value);
		txtOutput.innerHTML = txtInput.value;
	}
   entry.addEventListener('click',start);
}
window.addEventListener('load', init);