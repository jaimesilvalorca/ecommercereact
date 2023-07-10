// import NavBar from "../../layout/navbar/NavBar"
import ItemList from "../itemList/ItemList"
import Footer from "../../layout/footer/Footer"
import ItemDetail from "./itemDetail/ItemDetail"

const Home = ({edad}) => {
  console.log("el componente se monto!")


  return (
    <>
      {/* <NavBar /> */}
      <ItemList nombre='JS'/>
      <h2>La edad es{edad}</h2>
      <ItemDetail/>
      <Footer />

    </>
  )
}

export default Home