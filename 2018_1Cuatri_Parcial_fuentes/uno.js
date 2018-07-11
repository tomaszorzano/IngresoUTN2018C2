
function mostrar()
{   var ancho ;
    var largo ;
    var perimetro;

    ancho=prompt("Ingrese Ancho del rectangulo aqui");
    ancho=parseInt(ancho);
    largo=prompt("Ingrese largo del rectangulo aqui");
    largo=parseInt(largo);
    perimetro = ancho + largo + ancho + largo;
    perimetro=parseInt(perimetro)
     
    alert("el perimetro es " + perimetro);
} 
    
