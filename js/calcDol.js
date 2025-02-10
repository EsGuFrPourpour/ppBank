const dolares =[
    {        tipo: "blue",
        precioCompra: 1220,
        precioVenta: 1240
    },
    {
        tipo: "oficial",
        precioCompra: 1021,
        precioVenta: 1061
    },
    {
        tipo: "cripto",
        precioCompra: 1214,
        precioVenta: 1216
    }
];

dolares.forEach( dolar => {
    const dolarEnHtml = `
        <div class="dolarArray">
            <h2>${dolar.tipo}</h2>
            <p>compra: $${dolar.precioCompra.toFixed(2)}</p>
            <p>venta: $${dolar.precioVenta.toFixed(2)}</p>
        </div>
    ` ;
    tipo.innerHTML +=dolarEnHtml;
});
/*
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
}*/
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