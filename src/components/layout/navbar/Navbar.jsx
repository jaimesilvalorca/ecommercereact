import { AppBar, Badge, Button, Toolbar, Typography } from "@mui/material"
import CartWidget from "../../common/cartwidget/CartWidget"

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Ecommerce JS
                </Typography>
                <Button color='inherit'>
                    Inicio
                </Button>
                <Button color='inherit'>
                    Productos
                </Button>
                <Button color='inherit'>
                    Contacto
                </Button>
                <Badge>
                <CartWidget />
                </Badge>

            </Toolbar>
        </AppBar>
    )
}

export default Navbar