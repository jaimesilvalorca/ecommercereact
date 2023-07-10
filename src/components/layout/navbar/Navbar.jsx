import { AppBar, Badge, Button, Toolbar, Typography } from "@mui/material"
import CartWidget from "../../common/cartwidget/CartWidget"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        <Link to='/'>Ecommerce JS
                        </Link>
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
        </div>
    )
}

export default Navbar