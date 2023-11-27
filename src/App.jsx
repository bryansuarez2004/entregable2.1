
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import WeatherDetail from './components/WeatherDetail';
import Looder from './components/Looder';

function App() {
 
const [weather, setWeather] = useState(null)



const succes = (pos) => {
    const {coords: {latitude, longitude},} = pos;


  axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=ef8bcfef59f9e7ce6dc956fee075d7ed&lang=es&units=metric`)
  .then(({data}) =>  setWeather(data))
  .catch((err) => console.log(err));
  

}

useEffect(() => {
  navigator.geolocation.getCurrentPosition(succes);
}, [])

  return (
    <main className='conteiner'>
      {
        weather ? <WeatherDetail weather={weather} /> : <Looder />
      }
      
    </main>
  )
}

export default App
