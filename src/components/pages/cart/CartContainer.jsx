import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"

//hay que indicarle que contexto va utilizar


const CartContainer = () => {

    const {cart,clearCart,deleteById} = useContext(CartContext) 
    console.log(cart)

  return (
    <div>
        <h1>Carritoooo</h1>
        {
          cart.map((elemento)=>{
            return <div key={elemento.id} style={{boder:"2px solid black"}}>
              <h4>{elemento.title}</h4>
              <h5>{elemento.price}</h5>
              <h5>{elemento.quantity}</h5>
              <button onClick={()=>deleteById(elemento.id)}>Eliminar</button>
            </div>
          })
        }
        <button onClick={clearCart}>Limpiar Carrrito</button>
    </div>
  )
}

export default CartContainer