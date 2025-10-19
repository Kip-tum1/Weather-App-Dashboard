import axios from 'axios';
import { useState } from 'react';
function Weather(){
    const [data, setData] = useState({});
    const [location, setLocation] =useState ("")
    const apiKey = '3fc19044c519e1eae20efdcb0efbeb51'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`
    // console.log(url)

  
    function handleEnterCity(event){
      event.preventDefault()
      axios.get(url).then((response) => {
        setData(response.data);
      }).catch((error) => {
        alert("Error")
      })
    }

    
    function enterCity(event){
      setLocation(event.target.value);
    }


    
    return(
        
    <div className="weather-App-Dashboard w-150 m-0 mx-100 mt-20 rounded-lg h-300px flex items-center justify-center bg-gray-900 text-white">
      <div className="container mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Weather App Dashboard</h1>
        <div className="flex mb-4">
          <input type="text" value={location} onChange={enterCity}
            required
            placeholder="Enter city name"
            className="flex-1 p-2 rounded-l-lg border border-gray-700 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="p-2 bg-blue-600 rounded-r-lg hover:bg-blue-700 transition-colors" onClick={handleEnterCity}>
            Search
          </button>
        </div>
        <div className="container">          
            <div className="location mb-2 flex" >
              <h2>City:</h2>
              <p className='city ml-1 text-blue-500'>{data.name}</p>
            </div>
            <div className="temp flex mb-2">
              <h2>Temperature:</h2>
              {data.main ? <p className='temps ml-1 text-blue-500'>{data.main.temp}°F</p> : null}              
            </div>          
          <div className="description mb-2 flex">
            <h2>Weather Codition:</h2>
            {data.weather ? <p className='condition ml-1 text-blue-500'>{data.weather[0].main}</p> : null}
          </div>
          <div className="feelsLike mb-2 flex">
            <h2>Pressure:</h2>           
            {data.main ? <p className='pressure ml-1 text-blue-500'>{data.main.pressure} Pascal</p> : null}
          </div>
          <div className="humidity mb-2 flex">  
            <h2>Humidity:</h2>          
            {data.main ? <p className="humidity ml-1 text-blue-500">{data.main.humidity} %</p> : null}
          </div>
          <div className="wind mb-2 flex">  
            <h2>Winds Speed: </h2>          
            {data.wind ? <p className="winds ml-1 text-blue-500">{data.wind.speed} Km/hr</p> : null}
          </div>
        </div>
      </div>
    </div>
  );

}
export default Weather;