
// import { useState } from "react"
import { BrowserRouter } from "react-router-dom"
import AppRouter from "./routes/AppRouter"
import CartContextProvider from "./context/CartContext"


function App() {

  // const [showItems, setShowItems] = useState(false)
  // const [edad, setEdad] = useState(22)


  return (
    <BrowserRouter>
    <CartContextProvider>
      <AppRouter />

    </CartContextProvider>
    </BrowserRouter>


    // <div>
    //   {
    //     showItems ? <Home edad={edad}/> : <h1> No hay nada</h1>
    //   }

    //   <button onClick={()=> setShowItems(!showItems)}>montar y desmontar</button>
    //   <button onClick={()=> setEdad(edad+1)}>sumar edad</button>
    // </div>
  )


}

export default App