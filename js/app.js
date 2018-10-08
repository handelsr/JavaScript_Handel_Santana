function sumar(operando1, operando2) {
    return operando1 + operando2;
}


function restar(operando1, operando2) {
    return operando1 - operando2;
}

function multiplicar(operando1, operando2) {
    return operando1 * operando2;
}

function dividir(operando1, operando2) {
    return operando1 / operando2;
}

function limpiar_todo() {
    document.getElementById("display").innerHTML = "0";
    document.getElementById("oculto").value="0";
}


function aumentar_width(id) {

    document.getElementById(id).style.width = "80px";
}

function reducir_width(id) {


    document.getElementById(id).style.width = "70px";
}



function agregar_punto() {
    var cantidad_actual = document.getElementById("display").innerHTML;


    if (cantidad_actual.indexOf(".") == -1) {
        cantidad_actual = cantidad_actual + ".";

        document.getElementById("display").innerHTML = cantidad_actual;
    }


}



function agregar_signo() {
    var cantidad_actual = document.getElementById("display").innerHTML;

    if (cantidad_actual.indexOf("-") == -1) {

        if (cantidad_actual != "0") {
            cantidad_actual = "-" + cantidad_actual;
            document.getElementById("display").innerHTML = cantidad_actual;
        }



    } else {
        cantidad_actual = cantidad_actual.replace("-", "");

        document.getElementById("display").innerHTML = cantidad_actual;
    }


}


function calculadora(caracter) {
    //funcion para tomar los caracters dados por el usuario y mostrarlo en pantalla
    var anterior = document.getElementById("display").innerHTML; // controlar lo que se mostrara en pantalla
    var numeros = "0123456789";
    var resultado = 0;


    if (anterior.length < 8) {

        if (numeros.indexOf(caracter) != -1) { // si el caracter ingresado se encuentra entre los numeros validos, si no  es un signo de operacion

            if (anterior == "0" && caracter == "0") {


                document.getElementById("display").innerHTML = "0";




            } else if (anterior == "0" && caracter != "0") {


                document.getElementById("display").innerHTML = caracter;


            } else if (anterior != "0" && caracter != "0") {

                document.getElementById("display").innerHTML = anterior + caracter;


            } else {

                document.getElementById("display").innerHTML = anterior + caracter;


            }




        } else {   // si no es un numero entre el grupo de numeros permitidos, entonces es un signo de operacion (+,-,*,/)

            var signo = caracter;
            var operando1;
            var operando2;

            if (signo == "=") {
                operando2 = document.getElementById("display").innerHTML;
                operando1 = document.getElementById("oculto").value;




                if (operando1.indexOf("+") != -1) {
                    operando1 = parseFloat(operando1.split("+"));
                    operando2 = parseFloat(operando2);
                    resultado = sumar(operando1, operando2);
                    document.getElementById("display").innerHTML = resultado;
                    document.getElementById("oculto").value = operando2 + "+";





                } else if (operando1.indexOf("-") != -1) {

                    operando1 = parseFloat(operando1.split("-"));
                    operando2 = parseFloat(operando2);
                    resultado = restar(operando1, operando2);
                    document.getElementById("display").innerHTML = resultado;
                    document.getElementById("oculto").value = operando2 + "-";



                } else if (operando1.indexOf("*") != -1) {
                    operando1 = parseFloat(operando1.split("*"));
                    operando2 = parseFloat(operando2);
                    resultado = multiplicar(operando1, operando2);
                    document.getElementById("display").innerHTML = resultado;
                    document.getElementById("oculto").value = operando2 + "*";






                } else if (operando1.indexOf("/") != -1) {
                    operando1 = parseFloat(operando1.split("/"));
                    operando2 = parseFloat(operando2);
                    resultado = dividir(operando1, operando2);
                    document.getElementById("display").innerHTML = resultado;
                    document.getElementById("oculto").value = operando2 + "/";




                }




            } else {
                operando1 = document.getElementById("display").innerHTML;
                document.getElementById("display").innerHTML = "0";
                document.getElementById("oculto").value = operando1 + signo;



            }




        }


    } else {
        alert("lo sentimos, solo se permiten hasta 8 caracteres");
    }




}
