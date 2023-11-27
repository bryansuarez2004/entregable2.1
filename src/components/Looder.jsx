import './Weather.css'  
/* creando un componente para la pantalla de carga, que se renderizara 
mientras llegue la respuesta de la api*/

const Looder = () => {
  return (
    <div className='before'>  
        <div>
            <img src="/Vector.svg" alt="" />
        </div>
        <h3>
            Weather App
        </h3>
    
    </div>
  )
}
export default Looder