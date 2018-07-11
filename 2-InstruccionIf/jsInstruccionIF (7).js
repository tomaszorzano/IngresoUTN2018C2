function mostrar()
{
//tomo la edad  

    var edad;
    var estado;
    
    edad=document.getElementById("edad").value;
    edad=parseInt(edad);
    estado=document.getElementById("estadoCivil").value;
    if(edad<18 && estado != "soltero" )
    {alert("Eres demasiado pequeño para NO ser soltero")}


}//FIN DE LA FUNCIÓN