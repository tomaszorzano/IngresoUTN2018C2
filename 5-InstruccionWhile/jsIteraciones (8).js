function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero
	var respuesta='si';
do{
	numero=parseInt(prompt("Ingrese un numero aqui "))
	if(numero < 0 ){
		 contador++
		 negativo= negativo * numero 
	} else{
		positivo= numero + positivo 
	}
	respuesta=prompt("Desea continuar? ")
}while( respuesta != "no")
 if( contador == 0 ){ negativo= 0

 }

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN