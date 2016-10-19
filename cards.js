var btnCreate = document.getElementById('btnCreate');
var txtInput = document.getElementById('txtInput');
var cardDisplay = document.getElementById('cardDisplay');

btnCreate.addEventListener('click', function() { createDiv(txtInput.value) });
txtInput.addEventListener("keydown", function() { 
	if (event.keyCode == 13) {
		event.preventDefault();
		createDiv(txtInput.value);
	}
})

function createDiv(str) {
	
	newCard = document.createElement("DIV");
	newCard.classList.toggle("card");
	newCard.innerHTML = "<p>" + str + "</p><hr><button type='button' id='btnDelete'>Delete</button>";
	document.body.appendChild(newCard);
	newCard.addEventListener('click', deleteCard);

}

function deleteCard() {

	document.body.removeChild(event.currentTarget);

}