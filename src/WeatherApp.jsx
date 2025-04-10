import SearchBox from "./searchBox";
import InfoBox from "./infoBox";
import React, { useState } from "react";


export default function WeatherApp(){
    const [weatherInfo , setWeatherInfo] = useState({
        city : "Delhi",
        feelsLike : 36.4,
        temp : 39.08,
        tempMin : 39.08,
        tempMax : 39.08,
        humidity :12,
        weather : "overcast clouds",
    });
    let updateInfo =(newInfo) =>{
        setWeatherInfo(newInfo);
    };

    return(
        <div style ={{ textAlign : "center"}}>
            <h2>Weather App by Salim</h2>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info={weatherInfo} />
        </div>
    );
}