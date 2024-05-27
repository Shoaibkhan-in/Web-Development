import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  //const [Name, setName] = useState("Shoaib")
  const [form, setform] = useState({email:'', phone:''})
  const handleClick = ()=>{
    alert("hey I am clicked ");
  }
  const HandleMouseOver = () =>{
    alert("Hey I am Mouse Over");
  }
  
  const handleChange = (e) =>{
    //setName(e.target.value)
    setform({...form, [e.target.name]:[e.target.value]})
    console.log(form);
  }

  return (
    <>
      <div className="button">
        <button onClick={handleClick}>click me</button>
      </div>
      {/*<div className="red" onMouseOver={HandleMouseOver}>
        Hey I am red
  </div>*/}
      <input type="text" name='email' value={form.email?form.email:''} onChange={handleChange}/>
      <input type="text" name='phone' value={form.phone?form.phone:''} onChange={handleChange}/>
    </>
  )
}

export default App
