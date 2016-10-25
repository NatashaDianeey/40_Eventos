function crearLista (obj) {

	
	var createForm = document.createElement('form');
		createForm.setAttribute('id','fondo');

	var createInput = document.createElement('input');
		createInput.setAttribute('id','cajaTexto');
		
	var createButton = document.createElement('button');
		createButton.innerHTML="Guardar"
 	   	createButton.setAttribute('id','botonVerde');
 	   	createButton.setAttribute('class','btn btn-default'); 


 	createForm.appendChild(createInput);
 	createForm.appendChild(createButton);
 	crearTarjeta.appendChild(createForm);

	
    obj.innerHTML = (crearTarjeta);





}


// var cajaSelectUno = document.getElementById('crearLista');
// 	cajaSelectUno.onclick = function () {
// 		crearLista ();
// 	}



