import { useContext, useEffect, useState } from "react"
import CounterContainer from "../../common/counter/CounterContainer"

import { useParams} from "react-router-dom"
import ProductCard from "../../common/productCard/ProductCard"
import { CartContext } from "../../../context/CartContext"
import { ToastContainer,toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import {db} from "../../../firebaseConfig"
import { getDoc,collection,doc} from "firebase/firestore"

const ItemDetailContainer = () => {

    const { addToCart,getQuantityById } = useContext(CartContext)

    const [producto, setProducto] = useState({})
    

    const { id } = useParams()

    const totalQuantity = getQuantityById(id)

    useEffect(() => {
        let productsCollection = collection(db,"products")
        let productRef = doc(productsCollection,id)
        getDoc(productRef).then(res=>{
            setProducto({...res.data(),id:res.id})
        })
    }, [id])

    const onAdd = (cantidad) => {

        let productCart = { ...producto, quantity: cantidad }
        addToCart(productCart)
        toast.success('Producto agregado correctamente');
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>El producto es: {producto.title}</h1>
            <div style={{ width: "100%", display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>

                <ProductCard item={producto} />
                {
                    (typeof(totalQuantity) === "undefined" || producto.stock > totalQuantity) && producto.stock > 0 && (
                        <CounterContainer stock={producto.stock} onAdd={onAdd} initial={totalQuantity} />
                    )}

                    {
                        producto.stock === 0 && <h2>No hay stock</h2>
                    }
                    {
                        typeof(totalQuantity) !== "undefined" && totalQuantity === producto.stock && <h2>Tienes el maximo de unidades en el carrito</h2>
                    }

               
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />

            </div>
        </div>
    )
}

export default ItemDetailContainer



























// const ItemDetailContainer = () => {

//     const { addToCart,getQuantityById } = useContext(CartContext)

//     const [producto, setProducto] = useState({})
    

//     const { id } = useParams()
//     const navigate = useNavigate()
//     const totalQuantity = getQuantityById(id)

//     useEffect(() => {
//         let productoSeleccionado = products.find(elemento => elemento.id === +id)
//         // eslint-disable-next-line no-unused-vars
//         const tarea = new Promise((res, rej) => {
//             res(productoSeleccionado)
//         })
//         tarea.then(res => setProducto(res))
//     }, [id])

    // import Swal from 'sweetalert2'
    // const onAdd = (cantidad) => {
    //     let productCart = { ...producto, quantity: cantidad }
    //     addToCart(productCart)
    //     // Swal.fire({
    //     //     position: 'center',
    //     //     icon: 'success',
    //     //     title: 'Producto agregado al carrito',
    //     //     showConfirmButton: false,
    //     //     timer: 1500,
    //     //   })
    //     toast.success('Producto agregado correctamente');
    // }