var btnClickInput = document.getElementById('crearLista');
	btnClickInput.onclick =  crearLista;

var crearTarjeta = document.getElementById('crearTarjeta');

var createInput = document.createElement('input');
	createInput.setAttribute('id','cajaTexto');
function crearLista(){

	var createForm = document.createElement('div');
		createForm.setAttribute('class','fondo');
		
	var createButton = document.createElement('button');
		createButton.innerHTML="Guardar";
 	   	createButton.setAttribute('class','btn btn-default'); 
 	
 	var createSpan = document.createElement('span');
 		createSpan.setAttribute('class', 'fa fa-close');

 	crearTarjeta.appendChild(createForm);
 	createForm.appendChild(createInput);
 	createForm.appendChild(createButton);
 	createForm.appendChild(createSpan);

	createButton.onclick = guardar;	
}

function guardar() {
	if (createInput.value === "") {
		createInput.setAttribute('placeholder', 'Ingresa texto válido');
		return false;
	} 

	var h4 = document.createElement('h4');
	var guardarTexto =document.createElement('div');
	guardarTexto.setAttribute('class', 'fondo');

	var inputDentroDiv = document.createElement('input');
	inputDentroDiv.setAttribute('placeholder', 'Añade una Tarjeta')
	inputDentroDiv.setAttribute('class', 'inputDentroDivClass')

	crearTarjeta.appendChild(guardarTexto);
	h4.innerHTML = createInput.value;
	guardarTexto.appendChild(h4);
	guardarTexto.appendChild(inputDentroDiv);


	//Comenzar en 0 el input de Inicio
	createInput.value = "";
}