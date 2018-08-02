function mostrar()
{
var numero=parseInt(prompt("Ingrese un numero "));

var contadorPares=0;
for(var i=0;i<=numero;i++){
    if(i %2 ==0 ){ 
        document.write( i + " <br>");
        contadorPares++;
              

        

    }
}

document.write("Cantidad de pares " + contadorPares);
    

}//FIN DE LA FUNCIÓN