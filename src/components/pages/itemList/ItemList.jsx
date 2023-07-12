import ProductCard from "../../common/productCard/ProductCard"


const ItemList = ({ items }) => {
  console.log("llego al presentacional:", items)


  return (
    <div>
      <h1 style={{textAlign:'center',paddingTop:'10px',paddingBottom:'10px'}}>
        Todos los productos
      </h1>
      <div style={{width: "100%",display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"}}>
        {items.map((item) => {
          return (
            <ProductCard key={item.id} item={item} isInItemList={true}/>
          )
        })}
      </div>
    </div>


  )
}

export default ItemList