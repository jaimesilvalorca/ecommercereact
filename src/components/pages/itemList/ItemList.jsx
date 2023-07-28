import { Skeleton } from "@mui/material"
import ProductCard from "../../common/productCard/ProductCard"


const ItemList = ({ items }) => {

  let arr = [1, 2, 3, 4]

  return (
    <div>
      <h1 style={{ textAlign: 'center', paddingTop: '10px', paddingBottom: '10px' }}>
        Todos los productos
      </h1>
      <div style={{ width: "100%", display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>
        {items.length > 0 ? items.map((item) => {
          return <ProductCard key={item.id} item={item} isInItemList={true} />
        }) : arr.map(e => {
          return (
            <div key={e}>
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="rectangular" width={210} height={60} />
              <Skeleton variant="rounded" width={210} height={60} />

            </div>
          )

        })
        }
      </div>
    </div>


  )
}

export default ItemList