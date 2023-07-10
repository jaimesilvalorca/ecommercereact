import { useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({stock,onAdd}) =>{
    const [contador,setContador] = useState(0)

    const sumar =  () =>{
        // if(contador < stock){
        //     setContador(contador +1)
        // }else{
        //     alert("cantidad maxima")
        // }
        contador < stock ? setContador(contador+1): alert("cantidad maxima")
        
    }

    const restar = () =>{
        // if(contador < 1){
        //     setContador(contador -1)
        // }

        contador > 1 && setContador(contador -1)

    }


    return (
        <Counter contador={contador} sumar={sumar} restar={restar} onAdd={onAdd} />
    )
}

export default CounterContainer