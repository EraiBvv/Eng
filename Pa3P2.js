function evalua() {
    const cadena = document.getElementById('cadena').value;
    const parrafo = document.getElementById('parrafo');
    const tieneMayusculas = /[A-Z]/.test(cadena);
    const tieneMinusculas = /[a-z]/.test(cadena);

    if (tieneMayusculas && tieneMinusculas) {
        parrafo.textContent = "La cadena contiene mayúsculas y minúsculas.";
    } else if (tieneMayusculas) {
        parrafo.textContent = "La cadena contiene solo mayúsculas.";
    } else if (tieneMinusculas) {
        parrafo.textContent = "La cadena contiene solo minúsculas.";
    } else {
        parrafo.textContent = "La cadena no contiene ni mayúsculas ni minúsculas.";
    }
}
