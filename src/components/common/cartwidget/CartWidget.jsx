import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';

const CartWidget = () => {

    const {cart,getTotalQuantity} = useContext(CartContext)
    let total = getTotalQuantity()
    return (
        <>
            <Badge badgeContent={total} showZero color="warning">
                <ShoppingCart color="inherit" />
            </Badge>
            <Link to='/cart'>Ir al carrito</Link>

        </>
    )
}

export default CartWidget