 function Meses(){
let mes=document.getElementById('mes').value;
	
	let result=validacion(mes)
 }


function validacion(valor){
	if (valor == "junio" || valor == "julio" || valor == "agosto") {
		 return document.getElementById("resultado").value="verano";
	}
	else if (valor == "septiembre" || valor == "octubre" || valor == "noviembre") {
		 return document.getElementById("resultado").value="otoño";
	}
	else if (valor == "diciembre" || valor == "enero" || valor == "febrero") {
		 return document.getElementById("resultado").value="invierno";
	}
	else if (valor == "marzo" || valor == "abril" || valor == "mayo") {
		 return document.getElementById("resultado").value="primavera";
	}
}