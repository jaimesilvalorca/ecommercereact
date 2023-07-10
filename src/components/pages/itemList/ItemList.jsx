import { useState, useEffect } from "react"
import CounterContainer from "../../common/counter/CounterContainer"

const ItemList = ({ nombre }) => {

  const [items, setItems] = useState([])


  useEffect(()=>{
    //ACA VA TODO CODIGO QUE NO QUIERO QUE SE LEA NUEVAMENTE
    console.log('El componente se montó')

  },[items])

  return (
    <div>
      <h1>Bienvenido a 
        la tienda de {nombre}</h1>
      <button onClick={()=>setItems([...items,{}])}>Traer productos</button>
      <CounterContainer stock={7}/>
    </div>
  )
}

export default ItemList