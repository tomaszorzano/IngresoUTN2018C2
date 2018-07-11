function mostrar()
{
//tomo la edad  

var edad;
       edad=document.getElementById("edad").value;
           edad=parseInt(edad);

           if (edad>=18)
           {alert("Eres mayor de edad")}
           else if (edad<13)
           {alert("Eres un niño")}
           else{alert("Eres adolescente")}


}//FIN DE LA FUNCIÓN