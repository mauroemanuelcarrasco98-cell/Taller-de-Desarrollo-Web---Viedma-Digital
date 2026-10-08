// Función para ejecutar la actividad de la imagen
function ejecutarActividad() {
    // Declaración de variables con 'let' (pueden cambiar de valor)
    let nombre = prompt("¿Cuál es tu nombre?");
    let edad = prompt("¿Cuántos años tienes?");

    // Validar si el usuario canceló o no ingresó datos
    if (!nombre || !edad) {
        alert("Por favor, ingresa los datos requeridos.");
        return;
    }

    // Convertimos la edad a número, ya que prompt() devuelve texto (string)
    edad = Number(edad);

    // Mostramos el mensaje de bienvenida usando template literals (comillas invertidas)
    const mensaje = `¡Hola, ${nombre}! Tienes ${edad} años. ¡Que gusto verte por acá!`;

    // 1. Mostrar en la consola del navegador como pide la consigna
    console.log(mensaje);

    // 2. Mostrar también el resultado visualmente en la página web
    const divResultado = document.getElementById("resultadoBienvenida");
    divResultado.textContent = mensaje;
    divResultado.style.display = "block";
}

// Asignamos el evento de clic al botón al cargar el script
document.getElementById("btnEjecutar").addEventListener("click", ejecutarActividad);
