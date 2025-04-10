import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyTwoToneIcon from '@mui/icons-material/WbSunnyTwoTone';
import ThunderstormTwoToneIcon from '@mui/icons-material/ThunderstormTwoTone';


export default function InfoBox({ info }) {
    const INIT_URL ="https://images.unsplash.com/photo-1693728535659-bf4a107ff50d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL ="https://plus.unsplash.com/premium_photo-1706534270994-15dacd37cc78?q=80&w=2156&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL ="https://images.unsplash.com/photo-1561693666-609d8bfdfa1f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFZFUlklMjBIT1QlMjBXRUFUSEVSJTIwSU1BR0V8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL ="https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UkFJTlklMjBXRUFUSEVSfGVufDB8fDB8fHww";

    return(
        <div className="InfoBox">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= {info.humidity>80 ?RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {info.humidity>80 ?<ThunderstormTwoToneIcon/> : info.temp > 15 ? <WbSunnyTwoToneIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color = 'text.secondary' component={"span"}>
         <p>Temperature = {info.temp}&deg;C</p>
         <p>Humidity = {info.humidity}</p> 
         <p>Min Temp = {info.tempMin}</p>
         <p>Max Temp = {info.tempMax}</p>
         <p>The weather can be describe as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
        </div>
    );
}