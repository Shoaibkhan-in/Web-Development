import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(false)
  const [todos, setTodos]= useState(
    [
      {
      title:"hey", 
      desc:"i am good todo"
      },
      {
        title:"hey another todo", 
        desc:"i am good todo too"
      },
      {
        title:"hey something todo", 
        desc:"i am good todo but i am something"
        }
    ]
  )

  const Todo=({todo})=>{ return <>
  <div className="m-4 border border-purple-500">
  <div className="todo">{todo.title}</div>
  <div className="todo">{todo.desc}</div>
  </div>
  </>}
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {todos.map(todo=>{
        return <Todo key={todo.title} todo={todo}/>
      })}
      {showbtn?<button>show btn is true</button>:<button>show btn is false</button>}
      {/*{showbtn && <button>showbtn is true</button> }*/}
      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>
          toggle show btn 
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
