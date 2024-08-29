function Value(val) {
    document.getElementById("display").value += val;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let currentDisplay = document.getElementById("display").value;
    document.getElementById("display").value = currentDisplay.slice(0, -1);
}

function calculateResult() {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
}
