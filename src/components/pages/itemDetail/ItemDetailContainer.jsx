import { useContext, useEffect, useState } from "react"
import CounterContainer from "../../common/counter/CounterContainer"
import products from "../../../productsMock"
import { useParams, useNavigate } from "react-router-dom"
import ProductCard from "../../common/productCard/ProductCard"
import { CartContext } from "../../../context/CartContext"


const ItemDetailContainer = () => {

    const {addToCart} = useContext(CartContext)

    const [producto, setProducto] = useState({})

    const { id } = useParams() 
    const navigate = useNavigate()

    useEffect(() => {
        let productoSeleccionado = products.find(elemento => elemento.id === +id)
        // eslint-disable-next-line no-unused-vars
        const tarea = new Promise((res, rej) => {
            res(productoSeleccionado)
        })
        tarea.then(res => setProducto(res))
    }, [id])

     const onAdd = (cantidad)=>{

        let productCart = {...producto,quantity:cantidad}
        addToCart(productCart)

         
     }

    return (
        <div style={{textAlign:"center"}}>
            <h1>El producto es: {producto.title}</h1>
            <div style={{ width: "100%", display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>

                <ProductCard item={producto} />
                {<CounterContainer stock={producto.stock} onAdd={onAdd}/> }

            </div>
        </div>
    )
}

export default ItemDetailContainer