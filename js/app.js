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







function calculadora(numero) {

    var numero_anterior = document.getElementById("input_oculto").value;//esta variable guarda el valor del numero que en el input al finalizar el proceso anterior

    //alert(" el numero que se acaba de presionar es:"+numero);

    if (numero_anterior.length < 8) {



        if (numero != "=" && numero != "+" && numero != "-" && numero != "*" && numero != "/") {

            if (numero == 0 && numero_anterior == 0) {
                // en caso de que el numero guardado en el input oculto sea 0
                document.getElementById("display").innerHTML = numero;
                document.getElementById("input_oculto").value = numero;



            } else if (numero != 0 && numero_anterior == 0) {





                // en caso de ser diferente de 0

                document.getElementById("input_oculto").value = numero;
                document.getElementById("display").innerHTML = numero;



            } else if (numero != 0 && numero_anterior != 0) {


                var nuevo_numero = numero_anterior.concat(numero);
                document.getElementById("input_oculto").value = nuevo_numero;
                document.getElementById("display").innerHTML = nuevo_numero;

            } else if (numero == 0 && numero_anterior != 0) {

                var nuevo_numero = numero_anterior.concat(numero);
                document.getElementById("input_oculto").value = nuevo_numero;
                document.getElementById("display").innerHTML = nuevo_numero;

            }



        } else if (numero == "+" || numero == "-" || numero == "/" || numero == "*") {




            document.getElementById("display").innerHTML = "";
            var nuevo_numero = numero_anterior.concat(numero);
            document.getElementById("input_oculto").value = nuevo_numero;




        } else if (numero == "=") {

            numero_anterior = document.getElementById("input_oculto").value;

            var posicion_signo_mas = numero_anterior.indexOf("+");

            var operando1 = parseInt(numero_anterior.substring(0, posicion_signo_mas));
            var operando2 = parseInt(numero_anterior.substring(posicion_signo_mas + 1, numero_anterior.length));



            var resultado = sumar(operando1, operando2);


            document.getElementById("display").innerHTML = resultado;
            document.getElementById("input_oculto").value = resultado;



        }

    } else {
        alert("Solo se permiten maximo 8 digitos");
    }



}// aca termina la definicion de la funcion "mostrar numero"