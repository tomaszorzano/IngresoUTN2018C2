function mostrar()
{
    var numero
	var contador=0;
	var acumulador=0;
	var respuesta='si';
do{  
	numero=parseInt(prompt("Ingrese un numero aqui "));
	contador ++ ;
	acumulador = numero + acumulador ;
   respuesta=prompt("Desea continuar? ");

}while(respuesta != "no")



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN