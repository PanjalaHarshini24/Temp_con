function convertTemperature() {
    // Get the input value
    var celsiusInput = document.getElementById("celsius").value;

    // Check if input is empty
    if (celsiusInput === "") {
        alert("Please enter a temperature in Celsius");
        return;
    }

    // Convert Celsius to Fahrenheit
    var fahrenheit = (celsiusInput * 9/5) + 32;

    // Display the result
    document.getElementById("result").innerHTML = `${celsiusInput} Celsius is ${fahrenheit.toFixed(2)} Fahrenheit`;
}
