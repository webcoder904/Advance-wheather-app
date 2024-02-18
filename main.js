
//selector variable
var inputval = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')


// Get your own free OWM API key at https://www.openweathermap.org/appid - please do not re-use mine!
// You don't need an API key for this to work at the moment, but this will change eventually.
apik = "3045dd712ffe6e702e3245525ac7fa38"
//kelvin to celcious
function convertion(val){
    return (val - 273).toFixed(2)
}
//fetch
    btn.addEventListener('click', function(){
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
        .then(res => res.json())
         //.then(data => console.log(data))
        .then(data => {
            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var tempature = data['main']['temp']
            var wndspd = data['wind']['speed']

            city.innerHTML=`City: ${nameval}`
            temp.innerHTML = `Temperature: ${ convertion(tempature)} C`
            description.innerHTML = `Conditions: ${descrip}`
            wind.innerHTML = `Wind Speed: ${wndspd} km/h`

        })
        .catch(err => alert('You entered Wrong city name'))
    })
// Selector variables
var inputval = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var description = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var icon = document.querySelector('#weather-icon');
var humidity = document.querySelector('#humidity');
var pressure = document.querySelector('#pressure');

// Get your own free OWM API key at https://www.openweathermap.org/appid - please do not re-use mine!
// You don't need an API key for this to work at the moment, but this will change eventually.
var apiKey = "3045dd712ffe6e702e3245525ac7fa38";

// Kelvin to Celsius conversion function
function convertToCelsius(val) {
    return (val - 273.15).toFixed(2);
}

// Fetch weather data function
function fetchWeatherData(cityName) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey)
        .then(res => res.json())
        .then(data => {
            var nameVal = data['name'];
            var descriptionVal = data['weather'][0]['description'];
            var temperatureVal = data['main']['temp'];
            var windSpeedVal = data['wind']['speed'];
            var humidityVal = data['main']['humidity'];
            var pressureVal = data['main']['pressure'];
            var iconCode = data['weather'][0]['icon'];

            // Update DOM elements with weather data
            city.innerHTML = `City: ${nameVal}`;
            temp.innerHTML = `Temperature: ${convertToCelsius(temperatureVal)} °C`;
            description.innerHTML = `Conditions: ${descriptionVal}`;
            wind.innerHTML = `Wind Speed: ${windSpeedVal} km/h`;
            humidity.innerHTML = `Humidity: ${humidityVal}%`;
            pressure.innerHTML = `Pressure: ${pressureVal} hPa`;

            // Update weather icon
            icon.src = `https://openweathermap.org/img/w/${iconCode}.png`;
            icon.alt = descriptionVal;
        })
        .catch(err => {
            alert('Error fetching weather data. Please check the city name and try again.');
            console.error(err);
        });
}

// Event listener for the button click
btn.addEventListener('click', function () {
    var cityName = inputval.value.trim();

    if (cityName !== "") {
        fetchWeatherData(cityName);
    } else {
        alert('Please enter a city name.');
    }
});
