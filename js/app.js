var oculto = "0";
var elemento = document.getElementsByTagName('img');
for (var i = "0"; i < elemento.length; i++) {

    var NoPermitidosCalcular = "on, sign, raiz, punto";
    if (NoPermitidosCalcular.indexOf(elemento[i].id) == -1) {
        var caracter;
        if (elemento[i].id == "dividido") {
            caracter = "/";
        }
        else if (elemento[i].id == "por") {
            caracter = "*";
        }
        else if (elemento[i].id == "menos") {
            caracter = "-";
        }
        else if (elemento[i].id == "igual") {
            caracter = "=";
        }
        else if (elemento[i].id == "mas") {
            caracter = "+";
        }
        else {
            caracter = elemento[i].id;
        }
        elemento[i].addEventListener("mousedown", calculadora.bind(this, caracter));
    } else if (elemento[i].id=="on") {
        elemento[i].addEventListener("mousedown", limpiar_todo);
    } else if (elemento[i].id == "sign") {
        elemento[i].addEventListener("mousedown", agregar_signo);
    } else if (elemento[i].id == "punto") {
        elemento[i].addEventListener("mousedown", agregar_punto);
    }

    elemento[i].addEventListener("mousedown", reducir_width.bind(this, elemento[i].id));
    elemento[i].addEventListener("mouseup", aumentar_width);
}

limpiar_todo();

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
    oculto = "0";
}


function aumentar_width() {

    var imagenes = document.getElementsByTagName('img');

    for (var i = 0; i < imagenes.length; i++) {
        imagenes[i].style.width = "80px";
    }
}

function reducir_width(id) {


    document.getElementById(id).style.width = "70px";
}



function agregar_punto() {
    var cantidad_actual = document.getElementById("display").innerHTML;

    if (cantidad_actual.length < 8) {
    if (cantidad_actual.indexOf(".") == -1) {
        cantidad_actual = cantidad_actual + ".";

        document.getElementById("display").innerHTML = cantidad_actual;
    }
    } else {
        alert("lo sentimos, solo se permiten hasta 8 caracteres");
        aumentar_width();
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
    var numeros = "0123456789";
    var signos = "/*-+=";
    var resultado = "0";


    if (anteriornum.length < 8 || signos.indexOf(caracter) != -1) {

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
            operando1 = oculto;

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
                        oculto = document.getElementById("display").innerHTML + "+=";
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
                        oculto = document.getElementById("display").innerHTML + "-=";
                        if (resultado.indexOf(".") != -1) {
                            document.getElementById("display").innerHTML = resultado.toString().substring(0, 9);
                        }
                        else {
                            document.getElementById("display").innerHTML = resultado.toString().substring(0, 8);
                        }
                    }

                } else if (operando1.indexOf("*") != -1 && oculto != "0") {

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
                        oculto = document.getElementById("display").innerHTML + "*=";
                        if (resultado.indexOf(".") != -1) {
                            document.getElementById("display").innerHTML = resultado.toString().substring(0, 9);
                        }
                        else {
                            document.getElementById("display").innerHTML = resultado.toString().substring(0, 8);
                        }
                    }



                } else if (operando1.indexOf("/") != -1 && oculto != "0") {

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
                        oculto = document.getElementById("display").innerHTML + "/=";
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
                    

                        oculto = document.getElementById("display").innerHTML + signo;
                        document.getElementById("display").innerHTML = "";
                        

                } else {
                    if (operando1.indexOf("+") != -1) {
                        operando1 = parseFloat(operando1.split("+"));
                        operando2 = parseFloat(operando2);
                        resultado = sumar(operando1, operando2).toString();
                        document.getElementById("display").innerHTML = "";
                        oculto = resultado + signo;





                    } else if (operando1.indexOf("-") != -1) {

                        operando1 = parseFloat(operando1.split("-"));
                        operando2 = parseFloat(operando2);
                        resultado = restar(operando1, operando2).toString();
                        document.getElementById("display").innerHTML = "";
                        oculto = resultado + signo;



                    } else if (operando1.indexOf("*") != -1 && oculto != "0") {
                        operando1 = parseFloat(operando1.split("*"));
                        operando2 = parseFloat(operando2);
                        resultado = multiplicar(operando1, operando2).toString();
                        document.getElementById("display").innerHTML = "";
                        oculto = resultado + signo;






                    } else if (operando1.indexOf("/") != -1 && oculto != "0") {
                        operando1 = parseFloat(operando1.split("/"));
                        operando2 = parseFloat(operando2);
                        resultado = dividir(operando1, operando2).toString();
                        document.getElementById("display").innerHTML = "";
                        oculto = resultado + signo;




                    }
                    else {
                        oculto = document.getElementById("display").innerHTML + signo;
                        document.getElementById("display").innerHTML = "";
                        
                    }
                }



            }
        }


    } else {
        alert("lo sentimos, solo se permiten hasta 8 caracteres");
        aumentar_width();
    }




}
