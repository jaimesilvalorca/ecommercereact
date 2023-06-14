import styles from "./Cart.module.css" //se utiliza el modulo como una hoja de estilos css para poder acceder al objeto que esta dentro de toda la hoja
import imagen from "../../../assets/images/imagen.jpeg" //importar imagen como modulo

const Cart = () =>{
    return(
    <div className={styles.container}>
        <h1>Soy un cart</h1>
        <img src={imagen} alt="" />
    </div>

    )
}

export default Cart