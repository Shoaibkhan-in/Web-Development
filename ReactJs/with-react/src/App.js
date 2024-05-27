import Navbar from './components/Navbar';
import './App.css';
import { useState } from 'react';
import Footer from './components/Footer';

function App() {
  const [value, setValue]= useState(0)
  return (
    <div className="App">
      <Navbar logoText="Shoaib React journey" />
      <div className="value">
      {value}
      </div>
      <button onClick={()=>{setValue(value +1)}}>click me</button>
      <Footer />
    </div>
  );
}

export default App;
