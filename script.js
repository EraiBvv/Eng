function esPalindromo(cadena) {
    var resultado = "La frase \"" + cadena + "\" ";
    // Convierte la cadena a minúsculas para evitar las diferencias por mayúsculas
    var cadenaOriginal = cadena.toLowerCase();
    // Remueve los espacios de la cadena
    var cadenaSinEspacios = cadenaOriginal.replace(/\s+/g, '');
    // Revierte la cadena
    var cadenaReversa = cadenaSinEspacios.split("").reverse().join("");
    // Verifica si la cadena original sin espacios es igual a la cadena revertida
    if (cadenaSinEspacios === cadenaReversa) {
        resultado += "es un palíndromo";
    } else {
        resultado += "no es un palíndromo";
    }
    return resultado;
}

function verificarPalindromo() {
    // Obtiene el valor del cuadro de texto
    var cadenaEntrada = document.getElementById("cadenaEntrada").value;
    // Llama a la función esPalindromo y obtiene el resultado
    var resultado = esPalindromo(cadenaEntrada);
    // Muestra el resultado en el párrafo con id "resultado"
    document.getElementById("resultado").innerText = resultado;
}
