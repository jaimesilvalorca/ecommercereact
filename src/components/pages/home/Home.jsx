// import { useState } from "react"
import NavBar from "../../layout/navbar/NavBar"
import ItemList from "../itemList/ItemList"

// eslint-disable-next-line react/prop-types
const Home = (/*{nombre,apellido}*/) => {
    //aqui va todo el codigo javascript

    //cuando la funcion necesita parametros, deberá tener un callback! o funcion flecha

    // const [contador,setContador] = useState(0)//dentro del useState va el comienzo de la variable //[x= variable, y= funcion que modifica esa variable]
    // const [name, setName] = useState("pepe") // para cambiar a maria se usa esta funcion <button onClick={()=>setName("maria")}>Cambiar a maria</button>


    // const sumar = () =>{
    //     setContador(contador + 1) //cuando no recibe parametros se invoca como en la linea 25
    // }

    // const sumar2 = (num) =>{
    //     setContador(contador + num) // para recibir los parametros se ocupa un callback linea 26
    //     //<button onClick={()=>setContador(contador +1)}>Sumar contador</button>
    // }

 // <></> uso de fragment para poder usar un solo div pero no puede darle un estilo, en caso contrario habria que hacer un div

  return (
    <>
      <NavBar />
      <ItemList nombre='JS'/>
      
    </>
    
    //el return comienza el html, se puede solo renderizar un solo contenedor
    // <div>
    //     <h1>{nombre} y {apellido}</h1>
    //     <h1>el nombre es {name}</h1>
    //     <button onClick={()=>setName("maria")}>Cambiar a maria</button>
    //     <h3>El contador esta en {contador}</h3>
    //     <button onClick={sumar}>Sumar contador</button>
    //     <button onClick={()=>sumar2(15)}>Sumar contador</button>



    // </div>
  )
}

export default Home