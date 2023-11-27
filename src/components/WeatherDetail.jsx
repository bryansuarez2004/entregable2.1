import './Weather.css'   /* hoja de estilos para este componente */
import {  useState } from 'react'


const WeatherDetail = ({weather}) => {





  
    const [celsius, setCelsius] = useState(weather.main.temp);
    const [farenheit, setFarenheit] = useState(false);

    const convert = () => {
     if(farenheit){
         setCelsius( ((celsius - 32) * 5/9).toFixed(1))
     } else {
        setCelsius(((celsius * (9 / 5)) + 32).toFixed(1))
     }
      setFarenheit(!farenheit)
    }

          
  










  return (
    <article className='weather'>
        <h3 className='weather__title'>{weather.name}, {weather.sys.country}</h3>

        <div className='weather__content'>
            <section className='country'>
                <h3 className='description'>{weather.weather[0].description}</h3>
                <span className='temp'>{celsius} °  { farenheit ? 'F': 'C'}</span>
                <div className='imgtemp'>
                    <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
                </div>
            </section>

            <section className='atributes'>
                <div className='atributes__box'>
                    <div>
                        <img src="/wind.svg" alt="" />
                    </div>
                    <span className='text'>
                    {weather.wind.speed}m/s
                    </span>
                </div>
                <div className='atributes__box'>
                    <div>
                        <img src="/humidity.svg" alt="" />
                    </div>
                    <span className='text'>
                        {weather.main.humidity}%
                    </span>
                </div>
                <div className='atributes__box'>
                    <div>
                        <img src="/preassure.svg" alt="" />
                    </div>
                    <span className='text'>
                        {weather.main.pressure}hPa
                    </span>
                </div>
            </section>  
             
        </div>

        <button onClick={convert} className='weather__btn'>
            { farenheit ? 'cambiar a C': 'cambiar a F'}
        </button>
    </article>
  )
}
export default WeatherDetail