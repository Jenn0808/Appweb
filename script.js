document.getElementById('formulario').addEventListener('submit', (event) => {
    event.preventDefault();

    const { nombre} = event.target.elements;
if (!nombre.value || !ElementInternals.value) {
    console.error('Enviado');
    return;
}
});

function añadirElemento(){
    let nuevoElemento = document.createElement("p");
    nuevoElemento.innerHTML = "ENVIADO";
    document.getElementById("añadir").appendChild(nuevoElemento);
}
