function sumar(a, b) { return a + b; }
function restar(a, b) { return a - b; }
function multiplicar(a, b) { return a * b; }
function dividir(a, b) {
    if (b === 0) return "Error: No se puede dividir entre cero.";
    return a / b;
}

function ejecutarActividadFunciones() {
    let num1 = Number(prompt("Ingresa el primer número:"));
    let num2 = Number(prompt("Ingresa el segundo número:"));

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor ingresa números válidos.");
        return;
    }

    let operacion = prompt("Ingresa la operación (suma/+, resta/-, multiplicacion/* ó x, division//):");

    if (!operacion) return;
    operacion = operacion.toLowerCase().trim();

    let resultado;

    switch (operacion) {
        case "suma":
        case "+":
            resultado = sumar(num1, num2);
            break;
        case "resta":
        case "-":
            resultado = restar(num1, num2);
            break;
        case "multiplicacion":
        case "*":
        case "x":
            resultado = multiplicar(num1, num2);
            break;
        case "division":
        case "/":
            resultado = dividir(num1, num2);
            break;
        default:
            alert("Operación no válida.");
            return;
    }

    alert(`[Módulo de Funciones] El resultado es: ${resultado}`);
}