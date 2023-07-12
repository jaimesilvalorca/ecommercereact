import { useEffect, useState } from "react"
// import CounterContainer from "../../../common/counter/CounterContainer"
import products from "../../../../productsMock"
import { useParams } from "react-router-dom"
import ProductCard from "../../../common/productCard/ProductCard"


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})

    const { id } = useParams()

    useEffect(() => {
        let productoSeleccionado = products.find(elemento => elemento.id === +id)
        // eslint-disable-next-line no-unused-vars
        const tarea = new Promise((res, rej) => {
            res(productoSeleccionado)
        })
        tarea.then(res => setProducto(res))
    }, [id])

    // const onAdd = (cantidad)=>{
    //     console.log(producto)
    //     console.log(cantidad)
    // }

    return (
        <div style={{textAlign:"center"}}>
            <h1>El producto es: {producto.title}</h1>
            <div style={{ width: "100%", display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>

                <ProductCard item={producto} />
                {/* <CounterContainer stock={producto.stock} onAdd={onAdd}/> */}

            </div>
        </div>
    )
}

export default ItemDetailContainer