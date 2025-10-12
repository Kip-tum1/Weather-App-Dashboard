import axios from 'axios';
import { useState } from 'react';
function Weather(){
    const [weather, setWeather] = useState();
    const url = "https://home.openweathermap.org/api_keys";
    
    const enterCity = (event) =>{
        setWeather(event.target.value)

    }


    
    return(
        <div>
            <h1>Weather-App Dashboard</h1>
            <div>
                <div>
                    <input type="text" onChange={enterCity} required aria-placeholder='Entercity Name'/>
                    <button>Search</button>                    
                </div>
                <h2>Mombasa</h2>
                <h2>32 degrees celcious</h2>
            </div>
        </div>
    )

}
export default Weather;