import Navbar from "./components/layout/navbar/Navbar"
import Footer from "./components/layout/footer/Footer"
import Cart from "./components/pages/cart/Cart"

function App() {
const funcionSaludar = () =>{
  console.log("hola como estas")
}

  return (
    <div>
      <Cart />
      <Navbar />
      <h1>Hola mundo</h1>
      <button onClick={funcionSaludar}>Saludar</button>
      <Footer />
    </div>
  )
}

export default App
