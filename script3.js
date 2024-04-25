function generarRFC() {
    const form = document.getElementById('rfcForm');
    const resultado = document.getElementById('resultado');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value.toUpperCase();
        const apellidoPaterno = document.getElementById('apellidoPaterno').value.toUpperCase();
        const apellidoMaterno = document.getElementById('apellidoMaterno').value.toUpperCase();
        const dia = document.getElementById('dia').value;
        const mes = document.getElementById('mes').value;
        const anio = document.getElementById('anio').value.slice(-2);

        const rfc = `${apellidoPaterno.slice(0, 2)}${apellidoMaterno.charAt(0)}${nombre.charAt(0)}${anio}${mes}${dia}`;

        resultado.textContent = `Su RFC es: ${rfc}`;
    });

    const selectDia = document.getElementById('dia');
    for (let i = 1; i <= 31; i++) {
        const option = document.createElement('option');
        option.text = i;
        option.value = i;
        selectDia.appendChild(option);
    }

    const meses = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    const selectMes = document.getElementById('mes');
    meses.forEach((mes, index) => {
        const option = document.createElement('option');
        option.text = mes;
        option.value = index + 1;
        selectMes.appendChild(option);
    });
}

document.addEventListener('DOMContentLoaded', generarRFC);
