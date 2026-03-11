// Funkce pro přidání hodnoty do displeje
function appendToResult(value) {
    const resultInput = document.getElementById('result');
    resultInput.value += value; // Přidá kliknuté číslo nebo operátor
}

// Funkce pro vymazání displeje
function clearResult() {
    const resultInput = document.getElementById('result');
    resultInput.value = ''; // Vymaže vše
}

// Funkce pro výpočet
function calculate() {
    const resultInput = document.getElementById('result');
    try {
        resultInput.value = eval(resultInput.value); // Spočítá výraz
    } catch (error) {
        resultInput.value = 'Error'; // Pokud je špatný výraz
    }
}function backspace() {
    const resultInput = document.getElementById('result');
    resultInput.value = resultInput.value.slice(0, -1);
}
let calculated = false;

function equal() {
    let display = document.getElementById("display");

    if (calculated) return; // zabrání druhému kliknutí na =

    try {
        display.value = eval(display.value);
        calculated = true;
    } catch {
        display.value = "Error";
    }
}function calculate() {
    const resultInput = document.getElementById('result');

    try {
        let expression = resultInput.value.replace(/:/g, "/");

        let result = eval(expression);

        if (result === undefined || result === Infinity || isNaN(result)) {
            resultInput.value = "Error";
        } else {
            resultInput.value = result;
        }

    } catch (e) {
        resultInput.value = "syntax error";
    }
}