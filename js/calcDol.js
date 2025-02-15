document.addEventListener('DOMContentLoaded', function() {
    const apiURL = 'https://dolarapi.com/v1/dolares';
    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            const dolarTipos = data.map(item => ({
                compra: item.compra,
                venta: item.venta,
                nombre: item.nombre,
                fechaActualizacion: item.fechaActualizacion
            }));
            if (dolarTipos.length > 0) {
                const actualizacion = document.getElementById('actualizacion');
                const fechaActualizacion = new Date(dolarTipos[0].fechaActualizacion);
                actualizacion.innerHTML = `
                    <p>Última actualización: ${fechaActualizacion.toLocaleDateString('es-ES')} ${fechaActualizacion.toLocaleTimeString('es-ES')}</p>
                `;
            }
            const tipo = document.getElementById('tipo');
            dolarTipos.forEach(dolar => {
                const dolarEnHtml = `
                    <div class="dolarArray">
                        <h2>${dolar.nombre}</h2>
                        <p>compra: $${dolar.compra.toFixed(2)}</p>
                        <p>venta: $${dolar.venta.toFixed(2)}</p>
                    </div>
                `;
                tipo.innerHTML += dolarEnHtml;
            });
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
        });
});
function calcularVenta() {
    const dolarOption = document.getElementById("dolarOption").value;
    const cantidad = parseFloat(document.getElementById("cantParaConvertir").value);

    if (dolarOption === "0" || isNaN(cantidad) || cantidad <= 0) {
        document.getElementById("resultado").innerText = "Por favor, seleccione un tipo de dólar válido y una cantidad positiva.";
        return;
    }

    const dolarSeleccionado = dolares.find(dolar => dolar.tipo === dolarOption);
    if (!dolarSeleccionado) {
        document.getElementById("resultado").innerText = "Tipo de dólar no encontrado.";
        return;
    }

    const convertirDolar = dolarSeleccionado.precioVenta * cantidad;
    document.getElementById("resultado").innerText = `El precio de venta para ${cantidad} dólares (${dolarOption}) es: $${convertirDolar.toFixed(2)}`;
}