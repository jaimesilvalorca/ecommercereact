import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    return (
        <>
            <Badge badgeContent={20} color="warning">
                <ShoppingCart color="inherit" />
            </Badge>
            <Link to='/cart'>Ir al carrito</Link>

        </>
    )
}

export default CartWidget