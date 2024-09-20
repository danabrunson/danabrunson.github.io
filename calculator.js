let results = [];
let total = 0;
let valid = [];

while (true) {
    let x = prompt("Enter first number or press Cancel to exit:");
    if (x === null) break;
    x = parseFloat(x);
    if (isNaN(x)) {
        alert("Invalid number.");
        continue;
    }


    let y = prompt("Enter second number:");
    if (y === null) break;
    y = parseFloat(y);
    if (isNaN(y)) {
        alert("Invalid number.");
        continue;
    }


    let operator = prompt("Enter operator (+, -, *, /, %):");
    if (operator === null) break;

    let result;
    switch (operator) {
        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            result = y !== 0 ? x / y : "Division by zero error";
            break;
        case '%':
            result = x % y;
            break;
        default:
            result = "Invalid operator";
    }


    document.write("<table>");
    document.write("<tr><th>x</th><th>op</th><th>y</th><th>result</th></tr>");
    document.write("<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>" + result + "</td></tr>");
    document.write("</table>");


    if (typeof result === "number") {
        valid.push(result);
        total += result;
    }
}


if (valid.length > 0) {
    let min = Math.min(...valid);
    let max = Math.max(...valid);
    let avg = total / valid.length;

    document.write("<table>");
    document.write("<tr><th>Min</th><th>Max</th><th>Avg</th><th>Total</th></tr>");
    document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg + "</td><td>" + total + "</td></tr>");
    document.write("</table>");
} else {
    document.write("<p>Invalid results</p>");
}
