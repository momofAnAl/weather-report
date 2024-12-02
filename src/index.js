let temperature = 48;

const tempValue = document.getElementById("tempValue");
const increaseTempControl = document.getElementById("increaseTempControl");
const decreaseTempControl = document.getElementById("decreaseTempControl");
const landscape = document.getElementById("landscape");

const updateTemperature = () => {
    tempValue.textContent = `${temperature}F`;
    //change colors and landscape
    if (temperature <= 49) {
        tempValue.style.color = "teal";
    } else if (temperature <= 59) {
        tempValue.style.color = "green";
        landscape.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    } else if (temperature <= 69) {
        tempValue.style.color = "yellow";
        landscape.textContent = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    } else if (temperature <= 79) {
        tempValue.style.color = "orange";
        landscape.textContent = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    } else {
        tempValue.style.color = "red";
        landscape.textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    }
};

increaseTempControl.addEventListener("click", () => {
    temperature += 1;
    updateTemperature();
});

decreaseTempControl.addEventListener("click", () => {
    temperature -= 1;
    updateTemperature();
});

updateTemperature();