import { AppBar,Toolbar, Typography } from "@mui/material"

const Footer = () => {

    return (
        <div style={{ textAlign:'center'}}>
            <AppBar position="static">
                <Toolbar>
                    <Typography style={{ textAlign:'center'}}>
                        <p>Todos los derechos reservados Ecommerce Jaime Silva</p>

                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )

}

export default Footer