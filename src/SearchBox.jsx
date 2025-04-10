import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [err, setErr] = useState(false); 
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "a0f6cb1e33f8157273f89e97bb54f68a";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(
                `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
            );
            let jsonResponse = await response.json();

            if (jsonResponse.cod !== 200) {
                throw new Error("City not found");
            }

            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };

            return result; 
        } catch (err) {
            throw err;
        }
    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            setErr(false); // Reset error before fetch
            let newInfo = await getWeatherInfo(); 
            updateInfo(newInfo);
            setCity(""); // Clear input after success
        } catch (err) {
            setErr(true);
        }
    };

    return (
        <div className='search'>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br /><br />
                <Button variant="contained" type="submit">Search</Button>
                {err && <p style={{color : "red"}}>No such place exists!</p>}
            </form>
        </div>
    );
}
