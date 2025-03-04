import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let  [count, setCount] = useState(18)
 
  const addvalue = () => {
    if(count<20){
    count = count+1;
    setCount(count);
    }
}
// functions should be defined at the top level of the component so they are accessible during re-renders. 
  const removevalue = () => {
    if(count>0){
    count = count- 1;
    setCount(count);
    }
  
}
  return (
    <>
     <h1>YASH AUR REACT</h1>
     <h2>counter{count}</h2>
     <button
     onClick={addvalue}
     >Add value</button>
     <br/>
     <button
     onClick={removevalue}
     >Remove value</button>
    </>
  )
}

export default App
