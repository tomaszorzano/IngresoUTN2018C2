function mostrar()
{
var numero
var acumPositivos=0
var acumNegativos=0
var contPositivos=0
var contNegativos=0
var contCeros=0
var contPares=0
var promedioPositivos
var promedioNegativos
var diferencia
var respuesta	
	
do{
	numero=parseInt(prompt("Ingrese un numero aqui "));

	if (numero>0){ 
		
		contPositivos++;
        acumPositivos = numero + acumPositivos;
		           }
	else if(numero < 0) {
		contNegativos++;
		acumNegativos = nuemro + acumNegativos;
	}
	else{   contCeros++ ;}
	
	if(numero %2 == 0){ contPares++}
	

	 
	respuesta=prompt("Desea continuar ? ");
}while(respuesta != "no")

if (contPositivos != 0){
	promedioPositivos=acumPositivos/contPositivos
}
if(contNegativos != 0 ){
	promedioNegativos=acumNegativos/contNegativos
}
diferencia=contPositivos-contNegativos

document.write("1-la suma de los Positivos es " + acumPositivos + "<br>" )
document.write("2-la suma de los Negativos es " + acumNegativos + "<br>" )
document.write("3-la cantidad de  los Positivos " + contPositivos + "<br>")
document.write("4-la cantidad de los Negativos " + contNegativos + "<br>")
document.write("5-la cantidad de los Ceros " + contCeros + "<br>")
document.write("6-la cantidad de los Pares " + contPares + "<br>")
document.write("7-el promedio de los Positivos " + promedioPositivos + "<br>")
document.write("8-el promedio de los Negativos " + promedioNegativos + "<br>")
document.write("9-Diferencia entre los Positivos y los Negativos " + diferencia + "<br>")



}//FIN DE LA FUNCIÓN