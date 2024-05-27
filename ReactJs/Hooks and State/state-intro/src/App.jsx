import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let a = 5; we cannot use this javascript since its not modifying value after button clicked
  const [count, setCount] = useState(0)

  return (
    <>
      <div>the count is {count}</div>
      <button onClick={()=>{setCount(count+1)}}>update count</button>
      {/*<div>the count is {count}</div>
      //<button onClick={()=>(a=a+1)}>update count</button>*/}
    </>
  )
}

export default App
