import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Cards from "./components/Cards"
function App() {
  
  return (
    <>
    <Navbar />
    <div className="cards">
      <Cards title="first card" description="this is first card description"/>
      <Cards title="second" description="this is second card description"/>
      <Cards title="third card" description="this is third card description"/>
      

    </div>
    
    

    <Footer />
    </>
  )
}

export default App
