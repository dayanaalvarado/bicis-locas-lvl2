

function validateForm(){
    
    var letrasnormales = /^[A-Za-z\_\-\.\s\xF1\xD1]+$/;

    function nombre(){

        var nombre = document.getElementById("name").value;
        if(nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {
            var claseInput = document.getElementsByClassName('input-box')[0]; //rescatando input clase input box
            var spanUno = document.createElement('span');   // obtener elementos de clase input box 0 que seria el 1        
            var textoSpan = document.createTextNode('Ingrese Su Nombre'); // creando el nodo de textoSpan que ira dentro del span
            spanUno.appendChild(textoSpan); // asignando textoSpan al span
            claseInput.appendChild(spanUno);// asignando span como spanUno clase input
            return false;

        } else if(!letrasnormales.test(nombre)){
            var claseInput = document.getElementsByClassName('input-box')[0];
            var spanUno = document.createElement('span');           
            var textoSpan = document.createTextNode('Debe ingresar solo caracteres tipo letras');
            spanUno.appendChild(textoSpan);
            claseInput.appendChild(spanUno);
            return  true;

        } else if (nombre.charAt(0) != nombre.charAt(0).toUpperCase()) {
            var claseInput = document.getElementsByClassName('input-box')[0];
            var spanUno = document.createElement('span');           
            var textoSpan = document.createTextNode('Su Nombre debe comenzar con Mayúsculas');
            spanUno.appendChild(textoSpan);
            claseInput.appendChild(spanUno);
        }
    }
    nombre();

    function apellido(){

        var apellido = document.getElementById("lastname").value;
        if(apellido == null || apellido.length == 0 || /^\s+$/.test(apellido)) {
            var claseInput = document.getElementsByClassName('input-box')[1];
            var spanUno = document.createElement('span');           
            var textoSpan = document.createTextNode('Ingrese su apellido');
            spanUno.appendChild(textoSpan);
            claseInput.appendChild(spanUno);
            return false;

        }else if(!letrasnormales.test(apellido)){
            var claseInput = document.getElementsByClassName('input-box')[1];
            var spanUno = document.createElement('span');           
            var textoSpan = document.createTextNode('Ingrese solo  caracteres tipo letras');
            spanUno.appendChild(texo);
            claseInput.appendChild(spanUno);
            return true;

        } else if (apellido.charAt(0) != apellido.charAt(0).toUpperCase()) {
            var claseInput = document.getElementsByClassName('input-box')[1];
            var spanUno = document.createElement('Su Apellido debe comenzar con mayusculas');
            spanUno.appendChild(textoSpan);
            claseInput.appendChild(spanUno);   
        }
    }
    apellido();

    function correoelectronico(){
        var caracteres = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
        var correoelectronico = document.getElementById('input-email').value;
        if(correoelectronico === null || correoelectronico.length === 0){
            var claseInput = document.getElementsByClassName('input-box')[2];
            var spanUno = document.createElement('span');           
            var textoSpan = document.createTextNode('Ingrese su correo Electrónico');
            spanUno.appendChild(textoSpan);
            claseInput.appendChild(spanUno);
            return false;

        }else if(caracteres.test(correoelectronico)){
            var claseInput = document.getElementsByClassName('input-box')[2];
            var spanUno = document.createElement('span');           
            var textoSpan = document.createTextNode('Verifique su Correo Electrónico');
            spanUno.appendChild(textoSpan);
            claseInput.appendChild(spanUno);
            return true;
        }
    }
    correoelectronico();


	function password(){
			var password = document.getElementById('input-password').value;

		if( password == null || password.length < 6 || /^\s+$/.test(password)) {
			var claseInput = document.getElementsByClassName('input-box')[3];
            var spanUno = document.createElement('span');           
            var textoSpan = document.createTextNode('Ingrese su contraseña');
            spanUno.appendChild(textoSpan);
            claseInput.appendChild(spanUno);
			return false;
		}
		if (password === "password" || password==="123456" || password==="098754") {
			var claseInput= document.getElementsByClassName('input-box')[3];
            var spanUno = document.createElement('span');           
            var textoSpan = document.createTextNode('Verifique su Contraseña');
            spanUno.appendChild(textoSpan);
            claseInput.appendChild(spanUno);;
			return true;
		}
	}
	password();
  

     function tipoBici(){
        var seleccion = document.getElementsByTagName('select')[0];
        var tipo = seleccion.value;
        var claseInput = document.getElementsByClassName('input-box')[4];
        var spanUno = document.createElement('span');           
        var textoSpan = document.createTextNode('Seleccione una opcion');
        spanUno.appendChild(textoSpan);
        claseInput.appendChild(spanUno);
            return false;
        
        return tipo == 'urbana' || tipo == 'trekking' || tipo == 'electrica' || tipo == 'estatica';

    }
    tipoBici();

}
    validateForm();
