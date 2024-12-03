let fahrenheitInput = document.getElementById('fahrenheit'),
celsiusInput = document.getElementById('celsius'),
kelvinInput = document.getElementById('kelvin');

fahrenheitInput.addEventListener('input', function(){
    let fahrenheit = parseFloat(fahrenheitInput.value),
    celsius = (fahrenheit - 32) * (5 / 9),
    kelvin = celsius + 273.15;
    celsiusInput.value = celsius;
    kelvinInput.value = kelvin;
});

celsiusInput.addEventListener('input', function(){
    let celsius = parseFloat(celsiusInput.value),
    fahrenheit = celsius * (9 / 5) + 32,
    kelvin = celsius + 273.15;
    fahrenheitInput.value = fahrenheit;
    kelvinInput.value = kelvin;
});

kelvinInput.addEventListener('input', function(){
    let kelvin = parseFloat(kelvinInput.value),
    celsius = kelvin - 273.15,
    fahrenheit = celsius * (9 / 5) + 32;
    celsiusInput.value = celsius;
    fahrenheitInput.value = fahrenheit;
});
