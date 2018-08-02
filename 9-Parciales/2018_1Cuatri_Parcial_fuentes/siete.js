function mostrar()
{
var nota;
var sexo;
var acumNotas=0;
var contNotas=0;
var sexoNotaBaja;
var cantVarones60mas=0;
var notaBaja
var promedio

for( var i=0; i<5 ;i++ ){
    nota=parseInt(prompt("Ingrese nota "));
    while(nota<0 || nota>10){
        nota=parseInt(prompt("Nota invalida. Reingrese nota: "));
    }
    sexo=prompt("ingrese sexo" + "f" + "o" + "m" );
    while(sexo !="f" || sexo != "m"){
         sexo=prompt("Sexo invalido.Reingrese sexo: ");
          
        }
     acumNotas= acumNotas + nota;

     if(nota< notabaja || flag ==0 ){
         notaBaja=nota;
         sexoNotaBaja=sexo;
         flag=1;
     if(sexo == "m" && nota>=6){cantVarones60mas++;}    
     }
}
promedio=acumNotas/contNotas;


alert("El promedio de las notas es" + promedio + "/n" + "La nota mas baja " + notaBaja + "El sexo de la nota mas baja es " + sexoNotaBaja + "/n" + "la cantidad de varones con nota >= 6 es " + cantVarones60mas );


}


