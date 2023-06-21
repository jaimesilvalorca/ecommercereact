import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';

const CartWidget = () => {
    return (

        <Badge badgeContent={20} color="warning">
            <ShoppingCart color="inherit" />
        </Badge>
    )
}

export default CartWidget