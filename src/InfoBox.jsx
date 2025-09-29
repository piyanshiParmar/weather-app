import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./InfoBox.css"

export default function InfoBox({info}){

    const INIT_URL = "https://tse3.mm.bing.net/th/id/OIP.x2C1yOoAisMR3JdkDNd_XAHaEK?pid=Api&P=0&h=180";

    let COLD_URL = "https://getwallpapers.com/wallpaper/full/b/1/9/1173068-cold-weather-wallpaper-1920x1080-large-resolution.jpg";

    let HOT_URL = "https://media.citizen.co.za/wp-content/uploads/2024/10/Hot-weather.jpg";

    let RAIN_URL = "https://tse3.mm.bing.net/th/id/OIP.V5Wl7SWAjejL2j1VxjVs-gHaE7?pid=Api&P=0&h=180";

    return <div className="InfoBox">
        <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ? RAIN_URL: info.temp > 15 ? HOT_URL: COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
            info.humidity>80 ? <ThunderstormIcon/>: info.temp > 15 ? <WbSunnyIcon/>: <AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
         <p>Temperature= {info.temp}&deg;C</p>
         <p>Humidity = {info.humidity}</p>
         <p>Min Temp = {info.tempMin}</p>
         <p>Max Temp = {info.tempMax}</p>
         <p>The weather can described as <i>{info.weather} </i>and feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
        </div>
    </div>
}