function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
 switch (mesDelAño) {
       case "Enero":
       case "Febrero":
       case "Marzo":
       case "Abril":
       case "Mayo":
       case "Junio": 
                    alert("Falta para el Invierno");
             break;                     
       
       case "Julio":
       case "Agosto":
                    alert("Estamos en invierno");
              break;        
      
      case "Septiembre":
      case "Octubre":
      case "Noviembre":
      case "Diciembre":
                       alert("Ya pasamos el frio, ahora calor!!!.");
              break;                                                   
                    }




}//FIN DE LA FUNCIÓN