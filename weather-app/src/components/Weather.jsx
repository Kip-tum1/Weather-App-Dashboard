import axios from 'axios';
import { useState } from 'react';
function Weather(){
    const [weather, setWeather] = useState({});
    const [location, setLocation] = ("")
    const url = "https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&appid=9c735214e168e14fc5367e167a31eba8";
    
    // const enterCity = (event) =>{
    //     if(event.key) === "Enter"{
    //         axios.get(url).then((response) => {
    //             setWeather(response.data)
    //         })

    //     }
    //     setLocation(event.target.value);
    //     setLocation("")

    // }


    
    return(
        <div>
            <h1>Weather-App Dashboard</h1>
            <div>
                <div>
                    <input type="text" value={location} onChange={enterCity} required aria-placeholder='Entercity Name'/>
                    <button>Search</button>                    
                </div>
            </div>
            <div className='container'>

                <div className='top'>
                    <div className='location'>
                        <p>{weather.name}</p>
                    </div>
                    <div>
                        <p>{weather.main ? <h2>weather.main.temp.fixed(0)</h2>: null}</p>
                    </div>
                    <div>
                        {weather.description ? <p>{weather.weather[0].main}</p> : null}
                    </div>
                </div>

                {weather.name != undefined && 
                <div className='bottom'>
                    <div className='feels'>
                        <p>{weather.main ? <p>{weather.main.feels_like}</p>: null}</p>
                    </div>
                    <div className=''></div>
                </div>}


            </div>
        </div>
    )

}
export default Weather;