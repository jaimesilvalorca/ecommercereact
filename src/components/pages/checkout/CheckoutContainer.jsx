import { useContext, useState } from "react"
import { CartContext } from "../../../context/CartContext"
import { db } from "../../../firebaseConfig"
import { addDoc, collection,serverTimestamp,doc, updateDoc} from "firebase/firestore"
import { Link } from "react-router-dom"



const CheckoutContainer = () => {

    const {cart,getTotalPrice} = useContext(CartContext)

    const [orderId,setOrderId] = useState('')
    console.log(orderId)

    const [data,setData] = useState({
        nombre:'',
        phone:'',
        email:''
    })

    let total = getTotalPrice()


    const handleSubmit = (evento) => {
        evento.preventDefault()
        let order = {
            buyer: data,
            items: cart,
            total: total,
            date: serverTimestamp()

        }

        console.log(order);

        const ordersCollection = collection(db,"orders")
        addDoc(ordersCollection,order).then(res=> setOrderId(res.id))


        cart.forEach((product) => {
            updateDoc(doc(db,'products',product.id),{stock:product.stock - product.quantity} )            
        });
    }

    const handleChange = (evento) =>{
        console.log(evento.target.value)
        setData({...data, [evento.target.name]: evento.target.value})
    }

    return (
        <div>
            <h1>CheckOut</h1>
            {
                orderId ? (
                    <div>
                        <h3>Gracias por su compra</h3>
                        <h4>su numero de compra es: {orderId}</h4>
                        <Link to='/'>Volver a comprar</Link>
                    </div>
                    ) : (<form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Ingrese su nombre" name="nombre" onChange={handleChange} />
                    <input type="text" placeholder="Ingrese su telefono" name="phone" onChange={handleChange} />
                    <input type="text" placeholder="Ingrese su correo" name="email" onChange={handleChange} />
    
                    <button type="submit">Enviar</button>
                </form>)
            }

        </div>
    )
}

export default CheckoutContainer
























    // const {cart,getTotalPrice} = useContext(CartContext)
    // // const [nombre, setNombre] = useState('')
    // // const [apellido, setApellido] = useState('')

    // const [data,setData] = useState({
    //     nombre:'',
    //     phone:'',
    //     email:''
    // })

    // let total = getTotalPrice()


    // const handleSubmit = (evento) => {
    //     evento.preventDefault()
    //     let order = {
    //         buyer: data,
    //         items: cart,
    //         total: total,
    //         date: serverTimestamp()

    //     }

    //     console.log(order);

    //     //boton enviar!
    //     //Aqui van las validaciones
    //     //Axios.post(URL,DATOS)
    //     //siempre el button se dispara cuando tiene type submit
    //     const ordersCollection = collection(db,"orders")
    //     addDoc(ordersCollection,order)
    // }
    // //siempre el boton onSubmit refresca la pagina


 // const handleChange = (evento) =>{
    //     // aqui van todos los capturar nombre
    //     console.log(evento.target.value)
    //     setData({...data, [evento.target.name]: evento.target.value})
    // }
    // // const capturaNombre = (evento) => {
    // //     // console.log(evento.target.value)
    // //     setData({...data,nombre:evento.target.value})
    // //     console.log(data)
    // //     // setNombre(evento.target.value)
    // // };

    // // const capturaApellido = (evento) => {
    // //     setData({...data,apellido:evento.target.value})
    // //     console.log(data)
    // //     // console.log(evento.target.value)
    // //     // setApellido(evento.target.value)
    // // }