import Navbar from "./Navbar"
import Footer from "./Footer"

function App() {
const funcionSaludar = () =>{
  console.log("hola como estas")
}

  return (
    <div>
      <Navbar />
      <h1>Hola mundo</h1>
      <button onClick={funcionSaludar}>Saludar</button>
      <Footer />
    </div>
  )
}

export default App
