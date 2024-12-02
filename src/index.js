let temperature = 48;

const tempValue = document.getElementById("tempValue");
const increaseTempControl = document.getElementById("increaseTempControl");
const decreaseTempControl = document.getElementById("decreaseTempControl");
const landScape = document.getElementById("landscape");
const cityNameInput = document.getElementById("cityNameInput");
const cityNameReset = document.getElementById("cityNameReset");
const headerCityName = document.getElementById("headerCityName");

const updateTemperature = () => {
    tempValue.textContent = `${temperature}F`;
    tempValue.style.color = getFontColor(temperature);
    landScape.textContent = getLandscape(temperature);
};

const getLandscape = (temp) => {
    if (temp <= 59) return "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    if (temp <= 69) return "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    if (temp <= 79) return "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    return "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
}

const getFontColor = (temp) => {
    if (temp <= 49) return "teal";
    if (temp <= 59) return "green";
    if (temp <= 69) return "yellow";
    if (temp <= 79) return "orange";
    return "red";
}

increaseTempControl.addEventListener("click", () => {
    temperature += 1;
    updateTemperature();
});

decreaseTempControl.addEventListener("click", () => {
    temperature -= 1;
    updateTemperature();
});

updateTemperature();

const updateCityName = (updateCity) => {
    headerCityName.textContent = updateCity;
}

cityNameInput.addEventListener("input", (event) => {
    updateCityName(event.target.value);
})

cityNameReset.addEventListener("click", () => {
    cityNameInput.value = '';
    updateCityName('Seattle');
}
)

