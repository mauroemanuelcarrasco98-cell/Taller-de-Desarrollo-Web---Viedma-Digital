function ejecutarPracticaDOM() {
    // 1. Seleccionar un elemento por su ID utilizando getElementById
    const tituloElemento = document.getElementById("tituloDinamico");
    const parrafoElemento = document.getElementById("parrafoDinamico");

    if (!tituloElemento || !parrafoElemento) return;

    // 2. Obtener y mostrar en la consola el contenido HTML e interno de texto
    console.log("=== CONTENIDO DEL ELEMENTO SELECCIONADO (CONSOLA) ===");
    console.log("Contenido HTML (innerHTML):", tituloElemento.innerHTML);
    console.log("Contenido de Texto (innerText):", tituloElemento.innerText);

    // 3. Modificar el contenido y el estilo utilizando JavaScript
    tituloElemento.textContent = "¡Elemento Modificado Exitosamente con JS!";
    tituloElemento.style.color = "#1e5631";
    tituloElemento.style.borderBottom = "3px dashed #2e7d32";

    parrafoElemento.textContent = "Este texto y el título superior fueron alterados dinámicamente desde el script mediante getElementById.";
    parrafoElemento.style.backgroundColor = "#eef7f0";
    parrafoElemento.style.padding = "10px";
    parrafoElemento.style.borderRadius = "5px";

    alert("Se han impreso las propiedades innerHTML e innerText en la consola (F12) y se han modificado los estilos de la página.");
}