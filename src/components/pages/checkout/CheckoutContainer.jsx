import { useState } from "react"

const CheckoutContainer = () => {

    // const [nombre, setNombre] = useState('')
    // const [apellido, setApellido] = useState('')

    const [data,setData] = useState({
        nombre:'',
        apellido:''
    })


    const handleSubmit = (evento) => {
        evento.preventDefault()
        console.log("se envio")
        console.log(evento)
        console.log(data)
        //boton enviar!
        //Aqui van las validaciones
        //Axios.post(URL,DATOS)
        //siempre el button se dispara cuando tiene type submit
    }
    //siempre el boton onSubmit refresca la pagina


    const handleChange = (evento) =>{
        // aqui van todos los capturar nombre
        console.log(evento.target.value)
        setData({...data, [evento.target.name]: evento.target.value})
    }
    // const capturaNombre = (evento) => {
    //     // console.log(evento.target.value)
    //     setData({...data,nombre:evento.target.value})
    //     console.log(data)
    //     // setNombre(evento.target.value)
    // };

    // const capturaApellido = (evento) => {
    //     setData({...data,apellido:evento.target.value})
    //     console.log(data)
    //     // console.log(evento.target.value)
    //     // setApellido(evento.target.value)
    // }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Ingrese su nombre" name="nombre" onChange={handleChange} />
                <input type="text" placeholder="Ingrese su apellido" name="apellido" onChange={handleChange} />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default CheckoutContainer