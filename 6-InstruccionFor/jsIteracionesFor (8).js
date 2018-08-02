function mostrar()
{


var numero=parseInt(prompt("Ingrese un numero "));

//var contadorPrimos=0;
for(var i=1 ; i<=numero ;i++ ){
    if( !(( numero % numero == 1) && (numero % 1 == numero))){ 
        document.write(  "es numero primo "+ " <br>");
        
              

        

    }else {
        document.write("no es numero primo ")
    }
     
     
}

//document.write("Cantidad de primos " + contadorPrimos);

}//FIN DE LA FUNCIÓN