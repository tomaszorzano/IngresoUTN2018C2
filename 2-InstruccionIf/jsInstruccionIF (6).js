function mostrar()
{
//tomo la edad  

var edad;
edad=document.getElementById("edad").value;
edad=parseInt(edad);
if (edad>=18){
    alert("Eres Mayor de edad")

}
else 
{ if(edad<13){
    alert("Eres Niño")
}
else{
    alert("Eres adolescente")
}

}



}//FIN DE LA FUNCIÓN