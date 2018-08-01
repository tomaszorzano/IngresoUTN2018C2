function mostrar()
{

	var contador=0;
	// declarar variables
	var numero
	var maximo
	var minimo
	var respuesta;
	flag =0 
	do{
		numero=(parseInt(prompt("Ingrese un numero ")))
		
		
		if(numero > maximo || flag == 0 ){
			maximo = numero
		}
		if (numero < minimo || flag == 0 ){
			minimo = numero
		    flag = 1
		}
		respuesta=prompt("Desea continuar? ")
	 
	
	}while(respuesta!='no')
	
	document.getElementById("maximo")=maximo
	document.getElementById("minimo")=minimo
		
	
	




}//FIN DE LA FUNCIÓN