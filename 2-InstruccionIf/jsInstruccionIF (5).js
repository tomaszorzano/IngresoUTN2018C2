function mostrar()
{
//tomo la edad  

var edad;
       edad=document.getElementById("edad").value;
       edad=parseInt(edad);
       if(!(edad>=13 && edad <=17))
       {alert("NO eres Adolescente")}
}//FIN DE LA FUNCIÓN