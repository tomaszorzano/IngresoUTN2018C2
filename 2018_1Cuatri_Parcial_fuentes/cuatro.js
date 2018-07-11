function mostrar()
{ var numero1;
  var numero2;
  var resta;
  var suma;          
        numero1=prompt("Ingrese un primer numero aqui");
                     numero1=parseInt(numero1);
        numero2=prompt("Ingrese un segundo numero aqui");
                     numero2=parseInt(numero2);
             if (numero1 == numero2)
                  {    alert( numero1.toString() + numero2 ) }
             
             else {
                   
                      if (numero1 > numero2)
                   
                            { resta=numero1-numero2;
                              resta=parseInt(resta);
                              alert("La resta da " + resta) ; }
                  
                      else { 
                              suma= numero1 + numero2 ;
                              suma=parseInt(suma) ;
                                

                            if (suma>10){
                               alert("la suma es " + suma + " y supero el 10 ");
                           }
                           else{alert("la suma es " + suma );}


                   }    
             }        




}
