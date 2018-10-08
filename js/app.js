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
    document.getElementById("oculto").value = "0";
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
    var anteriornum = document.getElementById("display").innerHTML.toString();
    var anteriornum = anteriornum.toString().replace(".", "");
    var anteriornum = anteriornum.toString().replace("/", "");
    var anteriornum = anteriornum.toString().replace("=", "");
    var anteriornum = anteriornum.toString().replace("+", "");
    var anteriornum = anteriornum.toString().replace("-", "");
    var anteriornum = anteriornum.toString().replace("*", "");
    var numeros = "0123456789";
    var resultado = "0";


    if (anteriornum.length < 8) {

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

            operando2 = document.getElementById("display").innerHTML;
            operando1 = document.getElementById("oculto").value;

            if (signo == "=") {




                if (operando1.indexOf("+") != -1) {
                    if (operando1.indexOf("=") != -1) {
                        operando1 = parseFloat(operando1.split("+"));
                        operando2 = parseFloat(operando2);
                        resultado = sumar(operando1, operando2).toString();
                        if (resultado.indexOf(".") != -1) {
                            document.getElementById("display").innerHTML = resultado.toString().substring(0, 9);
                        }
                        else {
                            document.getElementById("display").innerHTML = resultado.toString().substring(0, 8);
                        }
                    } else {
                        operando1 = parseFloat(operando1.split("+"));
                        operando2 = parseFloat(operando2);
                        resultado = sumar(operando1, operando2).toString();
                        document.getElementById("oculto").value = document.getElementById("display").innerHTML + "+=";
                        if (resultado.indexOf(".") != -1) {
                            document.getElementById("display").innerHTML = resultado.toString().substring(0, 9);
                        }
                        else {
                            document.getElementById("display").innerHTML = resultado.toString().substring(0, 8);
                        }

                    }



                } else if (operando1.indexOf("-") != -1) {
                    if (operando1.indexOf("=") != -1) {
                        operando1 = parseFloat(operando1.split("-"));
                        operando2 = parseFloat(operando2);
                        resultado = restar(operando2, operando1).toString();
                        if (resultado.indexOf(".") != -1) {
                            document.getElementById("display").innerHTML = resultado.toString().substring(0, 9);
                        }
                        else {
                            document.getElementById("display").innerHTML = resultado.toString().substring(0, 8);
                        }
                    } else {
                        operando1 = parseFloat(operando1.split("-"));
                        operando2 = parseFloat(operando2);
                        resultado = restar(operando1, operando2).toString();
                        document.getElementById("oculto").value = document.getElementById("display").innerHTML + "-=";
                        if (resultado.indexOf(".") != -1) {
                            document.getElementById("display").innerHTML = resultado.toString().substring(0, 9);
                        }
                        else {
                            document.getElementById("display").innerHTML = resultado.toString().substring(0, 8);
                        }
                    }

                } else if (operando1.indexOf("*") != -1 && document.getElementById("oculto").value != "0") {

                    if (operando1.indexOf("=") != -1) {
                        operando1 = parseFloat(operando1.split("*"));
                        operando2 = parseFloat(operando2);
                        resultado = multiplicar(operando1, operando2).toString();
                        if (resultado.indexOf(".") != -1) {
                            document.getElementById("display").innerHTML = resultado.toString().substring(0, 9);
                        }
                        else {
                            document.getElementById("display").innerHTML = resultado.toString().substring(0, 8);
                        }
                    } else {
                        operando1 = parseFloat(operando1.split("*"));
                        operando2 = parseFloat(operando2);
                        resultado = multiplicar(operando1, operando2).toString();
                        document.getElementById("oculto").value = document.getElementById("display").innerHTML + "*=";
                        if (resultado.indexOf(".") != -1) {
                            document.getElementById("display").innerHTML = resultado.toString().substring(0, 9);
                        }
                        else {
                            document.getElementById("display").innerHTML = resultado.toString().substring(0, 8);
                        }
                    }



                } else if (operando1.indexOf("/") != -1 && document.getElementById("oculto").value != "0") {

                    if (operando1.indexOf("=") != -1) {
                        operando1 = parseFloat(operando1.split("/"));
                        operando2 = parseFloat(operando2);
                        resultado = dividir(operando2, operando1).toString();
                        if (resultado.indexOf(".") != -1) {
                            document.getElementById("display").innerHTML = resultado.toString().substring(0, 9);
                        }
                        else {
                            document.getElementById("display").innerHTML = resultado.toString().substring(0, 8);
                        }
                    } else {
                        operando1 = parseFloat(operando1.split("/"));
                        operando2 = parseFloat(operando2);
                        resultado = dividir(operando1, operando2).toString();
                        document.getElementById("oculto").value = document.getElementById("display").innerHTML + "/=";
                        if (resultado.indexOf(".") != -1) {
                            document.getElementById("display").innerHTML = resultado.toString().substring(0, 9);
                        }
                        else {
                            document.getElementById("display").innerHTML = resultado.toString().substring(0, 8);
                        }
                    }

                }




            } else {

                if (operando1.indexOf("=") != -1) {
                    

                        document.getElementById("oculto").value = document.getElementById("display").innerHTML + signo;
                        document.getElementById("display").innerHTML = "";
                        

                } else {
                    if (operando1.indexOf("+") != -1) {
                        operando1 = parseFloat(operando1.split("+"));
                        operando2 = parseFloat(operando2);
                        resultado = sumar(operando1, operando2).toString();
                        document.getElementById("display").innerHTML = "";
                        document.getElementById("oculto").value = resultado + signo;





                    } else if (operando1.indexOf("-") != -1) {

                        operando1 = parseFloat(operando1.split("-"));
                        operando2 = parseFloat(operando2);
                        resultado = restar(operando1, operando2).toString();
                        document.getElementById("display").innerHTML = "";
                        document.getElementById("oculto").value = resultado + signo;



                    } else if (operando1.indexOf("*") != -1 && document.getElementById("oculto").value != "0") {
                        operando1 = parseFloat(operando1.split("*"));
                        operando2 = parseFloat(operando2);
                        resultado = multiplicar(operando1, operando2).toString();
                        document.getElementById("display").innerHTML = "";
                        document.getElementById("oculto").value = resultado + signo;






                    } else if (operando1.indexOf("/") != -1 && document.getElementById("oculto").value != "0") {
                        operando1 = parseFloat(operando1.split("/"));
                        operando2 = parseFloat(operando2);
                        resultado = dividir(operando1, operando2).toString();
                        document.getElementById("display").innerHTML = "";
                        document.getElementById("oculto").value = resultado + signo;




                    }
                    else {
                        document.getElementById("oculto").value = document.getElementById("display").innerHTML + signo;
                        document.getElementById("display").innerHTML = "";
                        
                    }
                }



            }
        }


    } else {
        alert("lo sentimos, solo se permiten hasta 8 caracteres");
    }




}
