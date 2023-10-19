import { useState } from 'react'
import './App.css'

function App() {
  
  const [count,setCount]=useState(15);

  const add=()=>{setCount(count+1)}

  const decreases=()=>{setCount(count-1)}

  return (
    
    <div  className={count<15?'container':'containerHot'}>
        <div className='displayInfo'> {count}°C</div>
        
        <div className='containerBtn'>
          <button className='btnAdd' onClick={add}>+</button>
          <button className='btnDecre' onClick={decreases}>-</button>
        </div>

    </div>
    
  )
}

export default App
