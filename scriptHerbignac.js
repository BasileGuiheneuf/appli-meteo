// //Herbignac
// const apiKey = "38ce96ec5fece8cdf1f8e8086af6f6c8"
// const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=herbignac";

//  async function checkWeather(){
//      const response = await fetch(apiURL+ `&appid=${apiKey}`);
//      let data = await response.json();

//      console.log(data)

//     document.querySelector(".cityHerbignac").innerHTML = data.name
//      document.querySelector(".tempHerbignac").innerHTML = math.round(data.main.temp)  + "°C";
//      document.querySelector(".humidityHerbignac").innerHTML = data.main.humidity +"%";
//      document.querySelector(".windHerbignac").innerHTML = data.wind.speed +" km/h";

//     if (data.weather[0].main == "Clouds"){
//     weatherIcon.src = "images/clouds.png";
//     } 
//     else if(data.weather[0].main == "Clear"){
//         weatherIcon.src = "images/clear.png";
//         }
//     else if(data.weather[0].main == "Rain"){
//         weatherIcon.src = "images/clouds.png";
//         }
//     else if(data.weather[0].main == "Drizzle"){
//         weatherIcon.src = "images/drizzle.png";
//         }
//     else if(data.weather[0].main == "Mist"){
//         weatherIcon.src = "images/mist.png";
//         }

// }

// checkWeather();