import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import {useState} from "react";
export default function SearchBox({updateInfo}){
    let [city,setCity] = useState("");
    let [error, setError]= useState(false);

    const API_URL = import.meta.env.VITE_WEATHER_URL;

    const API_KEY = import.meta.env.VITE_WEATHER_KEY;

    let getWeatherInfo = async()=>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
            let jsonResponse = await response.json();
            let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp,
            tempMax: jsonResponse.main.temp,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description
            }
            return result
        }catch(err){
            throw err
        }
    }

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        try{
            event.preventDefault();
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        }catch(err){
            setError(true)
        }  
    }
    return <div className="searchBox">
        <form onSubmit={handleSubmit}>
        <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
        <br></br> <br></br>
        <Button variant="contained" type="submit" >Search</Button>
        {error && <p style={{color: "red"}}>No such place exists!</p>}
        </form>
    </div>
}