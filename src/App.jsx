
// import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/layout/Layout"
import ItemDetailContainer from "./components/pages/home/itemDetail/ItemDetailContainer"
import { ItemListContainer } from "./components/pages/itemList/ItemListContainer"


function App() {

  // const [showItems, setShowItems] = useState(false)
  // const [edad, setEdad] = useState(22)


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryName" element={<ItemListContainer/>} />
          <Route path="/item/:id" element={<ItemDetailContainer/>} />
          <Route path="/login" element={<h1>este es el loggin</h1>} />
          <Route path="/cart" />
        </Route>
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
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