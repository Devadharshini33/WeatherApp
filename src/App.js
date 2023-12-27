import React ,{ useState } from "react";
import cloudVideo from './video/cloud.mp4';


function App() {
  const apiKey="5795dafa7cc49d02d50be04b9e618fe4";
  const [cityname,setCityname]=useState("")
  const [weather,setWeather]=useState({})
  function handleChange(event){
    setCityname(event.target.value)
   
  }
  function handleClick(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiKey}`).then(res=>res.json()).then((result)=>{
      console.log(result)
      setWeather(result)
     setCityname("")
    
    })//.catch((err)=>{
    //   console.log(err)
    // })
   
 
  }

  return (
    <div className="App">
      <video autoPlay loop muted className="video-background">
        <source src={cloudVideo} type="video/mp4" />
       
      </video>
     
       <h1 className="header">Weather App</h1>
       <div className="input-container">
       <input type="text" value={cityname} placeholder="Enter the city..." onChange={handleChange}/>
       
       <button className="button" onClick={handleClick}>Check</button>
        {weather.cod!=404?
       <div className="container1">{weather.name}</div>:<p className="notcity">Not a city</p>} 
       
       
       <div className="weatherContainer">
       {typeof weather.main !="undefined"?(
         <div>
           <p className="tempStyle">☀ {weather.main.temp}°C F</p>
           
       <p className="weatherDescription">☁ {weather.weather[0].main}</p>
       <p className="weatherDescription">🌤 {weather.weather[0].description}</p>
        </div>

       ):("")}
       </div>
      
      
       </div>
    </div>
  );
}

export default App;
