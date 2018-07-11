function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var max=11
	var min=1
    var numero=Math.floor(Math.random()* (max-min)+min)
	numero=parseInt(numero)
    if(numero>=9){alert("EXELENTE")}
	else{
          if(numero<9 && numero>=4){alert("APROBO")}
		  else{alert("Vamos, la proxima se puede")}

	}
}//FIN DE LA FUNCIÓN