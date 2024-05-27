import { useState, useEffect } from 'react'
import './App.css'



function App() {
  const [Card, setCard] = useState([])
    const FetchData= async () =>{
        let a = await fetch("https://jsonplaceholder.typicode.com/posts")
        let data = await a.json()
        setCard(data);
        console.log(data)
    }
    useEffect(()=>{
        FetchData();
    }, [])

    return (
        <>
        <div className='bg-gray flex flex-col'>
            {Card.map((data)=>{
                return (
                    <div key={data.id} className="card flex bg-black text-white border-2 border-orange-700 rounded-xl gap-4 mx-2 px-2 flex-col text-center  w-[50vw] h-[10vw]">
                        <h1 className='text-green-500 gap-2 border-2 border-purple-500 m-2 rounded-xl'>{data.title}</h1>
                        
                        <span>{data.UserId}</span>
                        
                        <span>{data.body}</span>
                        
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default App
