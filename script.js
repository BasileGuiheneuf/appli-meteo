// const apiKey = "38ce96ec5fece8cdf1f8e8086af6f6c8"
// const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=herbignac";

// async function checkWeather(){
//     const response = await fetch(apiURL+ `&appid=${apiKey}`);
//     let data = await response.json();

//     console.log(data)

//     document.querySelector(".city").innerHTML = data.name
//     document.querySelector(".temp").innerHTML = math.round(data.main.temp)  + "°C";
//     document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
//     document.querySelector(".wind").innerHTML = data.wind.speed +" km/h";
// }

// checkWeather();

const apiKey = "38ce96ec5fece8cdf1f8e8086af6f6c8"
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const dayOrNight= document.querySelector(".day-icon");

async function checkWeather(city){
    const response = await fetch(apiURL+ city + `&appid=${apiKey}`);
   
    if(response.status == 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    } else {
let data = await response.json();

    console.log(data)

    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed +" km/h";
    document.querySelector(".pressure").innerHTML = data.main.pressure + " hPa"

    if (data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    } 
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
        }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/clouds.png";
        }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
        }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
        }

if (data.wind.deg <= 22 || data.wind.deg > 337) {
    document.querySelector(".windDirection").innerHTML = "N";
} else if (data.wind.deg > 22 && data.wind.deg <= 67) {
    document.querySelector(".windDirection").innerHTML = "N-E";
} else if (data.wind.deg > 67 && data.wind.deg <= 112) {
    document.querySelector(".windDirection").innerHTML = "E";
} else if (data.wind.deg > 112 && data.wind.deg <= 157) {
    document.querySelector(".windDirection").innerHTML = "S-E";
} else if (data.wind.deg > 157 && data.wind.deg <= 202) {
    document.querySelector(".windDirection").innerHTML = "S";
} else if (data.wind.deg > 202 && data.wind.deg <= 247) {
    document.querySelector(".windDirection").innerHTML = "S-W";
} else if (data.wind.deg > 247 && data.wind.deg <= 292) {
    document.querySelector(".windDirection").innerHTML = "W";
} else if (data.wind.deg > 292 && data.wind.deg <= 337) {
    document.querySelector(".windDirection").innerHTML = "N-W";
}


    const sunrise = new Date(data.sys.sunrise * 1000); // Convertir timestamp en Date
    const sunset = new Date(data.sys.sunset * 1000);   // Convertir timestamp en Date

    const currentTime = new Date(); // Heure actuelle
    const isDay = currentTime >= sunrise && currentTime <= sunset;
    
    if (isDay===true){
        console.log("day")
    }else{
        dayOrNight.src = "images/night.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none"
    }
   
    
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
    

//Herbignac

const apiURLHerbignac = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=herbignac";

 async function checkWeatherHerbignac(){
     const response = await fetch(apiURLHerbignac+ `&appid=${apiKey}`);
     let data = await response.json();

const weatherIconHerbignac = document.querySelector(".weatherIconHerbignac")

     console.log(data)
    fetch("http://worldtimeapi.org/api/timezone/Europe/France/Herbignac")
        .then(res => res.json())
        .then(data => {
            console.log("heure exacte ", data.datetime);
        })

    document.querySelector(".cityHerbignac").innerHTML = data.name
    document.querySelector(".tempHerbignac").innerHTML = Math.round(data.main.temp)  + "°C";
    document.querySelector(".humidityHerbignac").innerHTML = data.main.humidity +"%";
    document.querySelector(".windHerbignac").innerHTML = data.wind.speed +" km/h";
    document.querySelector(".pressureHerbignac").innerHTML = data.main.pressure + " hPa"


    if (data.weather[0].main == "Clouds"){
    weatherIconHerbignac.src = "images/clouds.png";
    } 
    else if(data.weather[0].main == "Clear"){
        weatherIconHerbignac.src = "images/clear.png";
        }
    else if(data.weather[0].main == "Rain"){
        weatherIconHerbignac.src = "images/clouds.png";
        }
    else if(data.weather[0].main == "Drizzle"){
        weatherIconHerbignac.src = "images/drizzle.png";
        }
    else if(data.weather[0].main == "Mist"){
        weatherIconHerbignac.src = "images/mist.png";
        }

if (data.wind.deg <= 22 || data.wind.deg > 337) {
    document.querySelector(".windDirectionHerbignac").innerHTML = "N";
} else if (data.wind.deg > 22 && data.wind.deg <= 67) {
    document.querySelector(".windDirectionHerbignac").innerHTML = "N-E";
} else if (data.wind.deg > 67 && data.wind.deg <= 112) {
    document.querySelector(".windDirectionHerbignac").innerHTML = "E";
} else if (data.wind.deg > 112 && data.wind.deg <= 157) {
    document.querySelector(".windDirectionHerbignac").innerHTML = "S-E";
} else if (data.wind.deg > 157 && data.wind.deg <= 202) {
    document.querySelector(".windDirectionHerbignac").innerHTML = "S";
} else if (data.wind.deg > 202 && data.wind.deg <= 247) {
    document.querySelector(".windDirectionHerbignac").innerHTML = "S-W";
} else if (data.wind.deg > 247 && data.wind.deg <= 292) {
    document.querySelector(".windDirectionHerbignac").innerHTML = "W";
} else if (data.wind.deg > 292 && data.wind.deg <= 337) {
    document.querySelector(".windDirectionHerbignac").innerHTML = "N-W";
}


}

checkWeatherHerbignac();