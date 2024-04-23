const num1 = prompt("Enter first number: ");
const num2 = prompt("Enter second number: ");
const op = prompt("Enter operator (+, -, *, /): ");

function Kalkulator(num1, num2, op) {
    let result;

    switch (op) {
        case '+':
            result = parseFloat(num1) + parseFloat(num2);
            console.log(num1 + " + " + num2 + " = " + result);
            break;
        case '-':
            result = parseFloat(num1) - parseFloat(num2);
            console.log(num1 + " - " + num2 + " = " + result);
            break;
        case '*':
            result = parseFloat(num1) * parseFloat(num2);
            console.log(num1 + " * " + num2 + " = " + result);
            break;
        case '/':
            result = parseFloat(num1) / parseFloat(num2);
            console.log(num1 + " / " + num2 + " = " + result);
            break;
        default:
            console.log('Invalid operator');
            break;
    }
}

Kalkulator(num1, num2, op);