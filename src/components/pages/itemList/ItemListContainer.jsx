import { useEffect, useState } from "react"
import products from "../../../productsMock"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"


export const ItemListContainer = () => {
  const [items, setItems] = useState([])
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState({})

  const { categoryName } = useParams()

  useEffect(() => {
    let productosFiltrados = products.filter((elemento) => elemento.category === categoryName)
    // eslint-disable-next-line no-unused-vars
    const tarea = new Promise((res, rej) => {
      res(categoryName === undefined ? products : productosFiltrados)

    })
    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((error) => setError(error))
  }, [categoryName])

  return <ItemList items={items} />
}
