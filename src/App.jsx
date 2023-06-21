// import { useState } from "react"
// import Home from "./components/pages/home/Home"
// import ItemList from "./components/pages/itemList/ItemList"
import Home from "./components/pages/home/Home"

function App() {

  // const [saludo, setSaludo] = useState("hola como estas")
  // const [name,setName] = useState('Maria')
  // console.log(name)

  // const cambiarNombre = (nuevoNombre)=>{
  //   setName(nuevoNombre) //la funcion vive en el padre pero la funcion se ejecuta en el itemList container en el hijo
  // }

  // const cambiarSaludo = (nuevoSaludo) => {
  //   setSaludo(nuevoSaludo)

  // }

  return (

    <Home />
    // <div>
    //   <Home nombre={"Juancito"} apellido={"juanchox"} />
    //   <ItemList saludo={saludo} cambiarSaludo = {cambiarSaludo} cambiarNombre={cambiarNombre}/>
    // </div>

  )
}

export default App