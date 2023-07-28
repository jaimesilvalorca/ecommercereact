import { Button, TextField } from "@mui/material"
import { useFormik } from "formik"
import * as Yup from "yup"


const FormularioFormik = () => {
    //se debe ingresar los parametros iniciales, despues de ese objetos se debe agregar un onSubmit igual que la funcion de react con los datos con los que quiero hacer
    const { handleSubmit, handleChange,errors } = useFormik({
        initialValues:{
            name:'',
            email:'',
            password:'',
            repeatPassword: '',

        },
        onSubmit: (data)=>{
            console.log(data)
        },
        validationSchema:Yup.object({
            name: Yup.string().required("Este campo es obligatorio").min(5,"este campo debe tener minimo 5 caracteres").max(10), //required, tiene que ser obligatorio
            email: Yup.string().email().required("Este campo es obligatorio"),
            password:Yup.string().required("Este campo es obligatorio").min(6),
            repeatPassword:Yup.string().required().oneOf([Yup.ref("password")],"Las contraseñas debe no coinciden") //el oneOF recibe un arreglo y un string
        }),
        validateOnChange:false, // para validar el el change
        validateOnBlur:true, //validar si entro o salgo de un input
    })
    console.log(errors)
    return (
        <div style={{ padding: "40px" }}>
            <form onSubmit={handleSubmit}>
                <TextField label="Name" variant="outlined" error={errors.name ? true : false} name="name" onChange={handleChange} helperText={errors.name}/>
                <TextField label="Email" variant="outlined" error={errors.email ? true : false} name="email" onChange={handleChange} helperText={errors.email}/>
                <TextField label="Pass" variant="outlined" error={errors.password ? true : false} name="password" onChange={handleChange} helperText={errors.password}/>
                <TextField label="Pass" variant="outlined" error={errors.repeatPassword ? true : false} name="repeatPassword" onChange={handleChange} helperText={errors.repeatPassword}/>
                <Button type="submit" variant="contained">Enviar</Button>
            </form>
        </div>
    )
}

export default FormularioFormik