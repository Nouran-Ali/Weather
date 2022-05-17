var form = document.getElementById("form");
var search = document.getElementById("search")
city = document.getElementById("city");
icons = document.getElementById("icon");
descriptions = document.getElementById("description");
tempe = document.getElementById("temp");
humidityy = document.getElementById("humidity");
windSpeed = document.getElementById("speed");


let weather = {
    apiKey : "d0bfc4fdcf67f13d22b46648798fece8",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city
            + "&units=metric&appid="
            + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data)); 
    },

    displayWeather: function(data) {
        const { name } = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name,icon, description,temp, humidity, speed);
        city.innerText = "Weather in " +name;
        icons.src = "https://openweathermap.org/img/wn/" + icon + ".png";
        descriptions.innerText = description;
        tempe.innerText = temp + " °C";
        humidityy.innerText = "Humidity: " + humidity + " %";
        windSpeed.innerText = "wind speed: " + speed + " km/h";
    },
    search: function() {
        this.fetchWeather(search.value);
    }
};

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    weather.search();
})