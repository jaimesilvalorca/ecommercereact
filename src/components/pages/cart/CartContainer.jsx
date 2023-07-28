import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"
import Swal from "sweetalert2"

//hay que indicarle que contexto va utilizar


const CartContainer = () => {

    const {cart,clearCart,deleteById, getTotalPrice} = useContext(CartContext) 

    let total = getTotalPrice()

    const limpiar = () =>{

      Swal.fire({
        title: 'Seguro que quieres eliminar el carrito?',
        showDenyButton: true,
        confirmButtonText: 'Aceptar',
        denyButtonText: `Cancelar`,
        
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          clearCart()
          Swal.fire('El carrito se ha eliminado', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Tus productos se mantuvieron en el carrito', '', 'info')
        }
      })
    }

  return (
    <div>
        <h1>Carritoooo</h1>
        {
          cart.map((elemento)=>{
            return (
            <div key={elemento.id} style={{boder:"2px solid black"}}>
              <h4>{elemento.title}</h4>
              <h5>{elemento.price}</h5>
              <h5>{elemento.quantity}</h5>
              <button onClick={()=>deleteById(elemento.id)}>Eliminar</button>
            </div>
            )
          })}
          {
            cart.length > 0 && 
            <button onClick={limpiar}>Limpiar Carrrito</button>
          }
          <h5>El total es:{total}</h5>
    </div>
  )
}

export default CartContainer