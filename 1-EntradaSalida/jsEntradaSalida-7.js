/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var num1;
    var num2;
    var total;
           num1=document.getElementById("numeroUno").value;
                num1=parseInt(num1);
           num2=document.getElementById("numeroDos").value;
                num2=parseInt(num2);
           total= num1 + num2 
           alert(" La suma da " + total );          
}

function restar()
{    var num1;
     var num2;
     var total;
            num1=document.getElementById("numeroUno").value;
                 num1=parseInt(num1);
            num2=document.getElementById("numeroDos").value;
                num2=parseInt(num2);
            total= num1 - num2 
            alert(" La resta da " + total );  
	
}

function multiplicar()
{   var num1;
    var num2;
    var total;
            num1=document.getElementById("numeroUno").value
                num1=parseInt(num1);
            num2=document.getElementById("numeroDos").value
                num2=parseInt(num2);
            total= num1 * num2
            alert(" La multiplicacion da " + total)         

	
}

function dividir()
{   var num1;
    var num2;
    var total;
            num1=document.getElementById("numeroUno").value;
                num1=parseInt(num1);
            num2=document.getElementById("numeroDos").value;
                num2=parseInt(num1);
            total= num1 / num2 ;
            alert(" La division da " + total);         
	
}

