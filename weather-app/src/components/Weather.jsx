import axios from 'axios';
import { useState } from 'react';
function Weather(){
    const [weather, setWeather] = useState({});
    const [location, setLocation] = ("")
    // const apiKey = '3fc19044c519e1eae20efdcb0efbeb51'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Dallas&appid=3fc19044c519e1eae20efdcb0efbeb51`
    console.log(url)
    function enterCity(event) {
        if(event.key === "Enter"){
            axios.get(url).then((response) => {
                setWeather(response.data)
            })

        }
        setLocation(event.target.value);
        setLocation("")

    }

    function handleEnterCity(){
      
    }


    
    return(
        
    <div className="weather-App-Dashboard h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="container mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Weather App Dashboard</h1>
        <div className="flex mb-4">
          <input
            type="text"
            value={location}
            onChange={enterCity}
            required
            aria-placeholder="Enter city name"
            className="flex-1 p-2 rounded-l-lg border border-gray-700 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="p-2 bg-blue-600 rounded-r-lg hover:bg-blue-700 transition-colors" onClick={handleEnterCity}>
            Search
          </button>
        </div>
        <div className="container">
          <div className="top mb-4">
            <div className="location">
              <p>{weather.name}</p>
            </div>
            <div className="temp">
              {weather.main ? <h2>{weather.main.temp_fixed ? weather.main.temp_fixed : null}</h2> : null}
            </div>
          </div>
          <div className="description">
            {weather.weather ? <p>{weather.weather[0].main ? weather.weather[0].main : null}</p> : null}
          </div>
          <div className="feelsLike mb-2">
            <p className="font-semibold">Feels Like:</p>
            {weather.main ? <p>{weather.main.feels_like ? weather.main.feels_like : null}</p> : null}
          </div>
          <div className="humidity mb-2">
            <p className="font-semibold">Humidity:</p>
            {weather.main ? <p className="bold">{weather.main.humidity ? weather.main.humidity : null}</p> : null}
          </div>
          <div className="wind mb-2">
            <p className="font-semibold">Wind Speed:</p>
            {weather.wind ? <p className="bold">{weather.wind.speed ? weather.wind.speed : null}</p> : null}
          </div>
        </div>
      </div>
    </div>
  );

}
export default Weather;