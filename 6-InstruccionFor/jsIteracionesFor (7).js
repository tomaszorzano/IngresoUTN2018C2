function mostrar()
{


var numero=parseInt(prompt("Ingrese un numero "));

var contadorDivisores=0;
for(var i=0;i<=numero;i++){
    if(numero % i ==0 ){ 
        document.write( i + " <br>");
        contadorDivisores++;
              

        

    }
}

document.write("Cantidad de divisores " + contadorDivisores);

}//FIN DE LA FUNCIÓN