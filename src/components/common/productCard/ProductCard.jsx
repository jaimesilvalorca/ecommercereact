import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const ProductCard = ({ item,isInItemList }) => {
  return (
    <Card sx={{ Width: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={item.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {
          isInItemList ? (
            <Button size="small" color="primary" >
              <Link to={`/item/${item.id}`}>Ver detalle</Link>
            </Button>
          ) : (
            <Button size="small" color="primary">
              Eliminar del Carrito
            </Button>
          )

        }
      </CardActions>
    </Card >
  )
}

export default ProductCard