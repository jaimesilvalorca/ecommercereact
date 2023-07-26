import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';

const CartWidget = () => {

    const {cart} = useContext(CartContext)
    return (
        <>
            <Badge badgeContent={cart.length} showZero color="warning">
                <ShoppingCart color="inherit" />
            </Badge>
            <Link to='/cart'>Ir al carrito</Link>

        </>
    )
}

export default CartWidget