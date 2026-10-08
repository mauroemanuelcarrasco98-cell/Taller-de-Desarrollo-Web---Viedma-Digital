function ejecutarCalculadora() {
    let entradaNumero1 = prompt("Ingresa el primer número:");
    let num1 = Number(entradaNumero1);

    if (entradaNumero1 === null || entradaNumero1.trim() === "" || isNaN(num1)) {
        alert(" Error: Por favor ingresa un primer número válido.");
        return;
    }

    let entradaNumero2 = prompt("Ingresa el segundo número:");
    let num2 = Number(entradaNumero2);

    if (entradaNumero2 === null || entradaNumero2.trim() === "" || isNaN(num2)) {
        alert(" Error: Por favor ingresa un segundo número válido.");
        return;
    }

    let operacion = prompt("¿Qué operación deseas realizar? (suma/+, resta/-, multiplicacion/* ó x, division//)");
    
    if (operacion === null) return;
    operacion = operacion.toLowerCase().trim();

    let resultado;

    // Aceptamos tanto la palabra como los símbolos +, -, *, x, /
    switch (operacion) {
        case "suma":
        case "+":
            resultado = num1 + num2;
            operacion = "suma (+)";
            break;
        case "resta":
        case "-":
            resultado = num1 - num2;
            operacion = "resta (-)";
            break;
        case "multiplicacion":
        case "*":
        case "x":
            resultado = num1 * num2;
            operacion = "multiplicación (*)";
            break;
        case "division":
        case "/":
            if (num2 === 0) {
                alert(" Error: No se puede dividir entre cero.");
                return;
            }
            resultado = num1 / num2;
            operacion = "división (/)";
            break;
        default:
            alert(" Error: Operación no válida.");
            return;
    }

    alert(`El resultado de la ${operacion} entre ${num1} y ${num2} es: ${resultado}`);
}