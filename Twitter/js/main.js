function anadirTextoaChecklist() {
    var agregarTexto = document.getElementById('tareaInput').value;
    
    if (agregarTexto == "") {
        alert('Introduce texto valido');
    } else  {

        //crear input
        var createInput = document.createElement('input');
        createInput.setAttribute('type','checkbox');
        //crear lista
        var content = document.createElement('li');
        //concatena la lista con el checkbox
        content.appendChild(createInput);
        //concatena el texto agregado en textarea en lista
        content.appendChild(document.createTextNode(agregarTexto));

        var btotonGplypicon = document.createElement('button');
        var spanGplypicon = document.createElement('span');
        spanGplypicon.setAttribute('class', "fa fa-trash pull-right" );
        btotonGplypicon.appendChild(spanGplypicon);
        content.appendChild(btotonGplypicon);

        document.body.appendChild(content);



//se tiene que poner primero la funcion y despues el evento para que el evento sepa a quien  llamar
        // function presionarCkeck(){
        //     content.parentNode.removeChild(content);
        // };
        // btotonGplypicon.onclick=presionarCkeck;
        
//Funcion para tachar checklist
        // function presionChecbox() {
        //     var checkboxSelect = document.getElementsByTagName('checkbox');
        //         checkboxSelect.onclick=function (){
        //             checkboxSelect.nextSibling(agregarTexto.strike());
        //     }presionChecbox();











    }
}