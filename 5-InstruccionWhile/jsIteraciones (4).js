function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

	while (!(numero>=0 && numero<=9)){

		numero=parseInt(prompt("Numero incorrecto. Ingrese numero aqui."))
	}
document.getElementById("Numero").value = numero

}//FIN DE LA FUNCIÓN