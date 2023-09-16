function toFah(){
    const temp = document.getElementById("celsius");
    const resultElement = document.getElementById("result1");
    const celsiusValue = parseFloat(temp.value);

    if (!isNaN(celsiusValue)) {
        const fahrenheitValue = (celsiusValue * 9/5) + 32;
        resultElement.textContent = `${celsiusValue.toFixed(2)}°C is equal to ${fahrenheitValue.toFixed(2)}°F`;
    } else {
        resultElement.textContent = "Please enter a valid temperature.";
    }

}

function toCel(){
    const temp = document.getElementById("fahrenheit");
    const resultElement = document.getElementById("result2");
    const fahrenheitV = parseFloat(temp.value);

    if (!isNaN(fahrenheitV)) {
        const celsiusV = (fahrenheitV - 32) * 5/9;
        resultElement.textContent = `${fahrenheitV.toFixed(2)}°F is equal to ${celsiusV.toFixed(2)}°C`;
    } else {
        resultElement.textContent = "Please enter a valid temperature.";
    }
}

function KtoCel(){
    const temp = document.getElementById("kelvinC");
    const resultElement = document.getElementById("result4");
    const kV = parseFloat(temp.value);

    if (!isNaN(kV)) {
        const celsiusV = kV-273.15;
        resultElement.textContent = `${kV.toFixed(2)}K is equal to ${celsiusV.toFixed(2)}°C`;
    } else {
        resultElement.textContent = "Please enter a valid temperature.";
    }
}

function KtoFah(){
    const temp = document.getElementById("kelvinF");
    const resultElement = document.getElementById("result3");
    const kV = parseFloat(temp.value);

    if (!isNaN(kV)) {
        const f = (kV - 273.15) * 9/5 + 32;
        resultElement.textContent = `${kV.toFixed(2)}K is equal to ${f.toFixed(2)}°F`;
    } else {
        resultElement.textContent = "Please enter a valid temperature.";
    }
}


