import React from "react";
import "../pages/Home.css"

const FormUserComponent = () => {
    return(
        <div>
            <div>
            <center>
                <img src="https://assets.stickpng.com/images/585e4bd7cb11b227491c3397.png" alt="Esta es una imagen que no ha cargado como deberia" width="100" height="100"/>
            </center>
            </div>
            <center>
            <h1><b>REGISTRO NUEVO USUARIO</b></h1>
        <form class="cssusuario">
        <label for="nameuser">Nombre de Usuario</label>
        <input type="text" name="etiquetaNombreUsuario" id="nameuser" placeholder="@nombreusuario123"/> 
        <br/>
        <label for="name">Nombre</label>
        <input type="text" name="etiquetaNombre" id="name" placeholder="Elba Calao"/> 
        <br/>
        <label for="number">Rut</label>
        <input type="number" name="etiquetaRut" id="number" placeholder="245000003"/>
        <br/>
        <label for="correo">Correo</label>
        <input type="email" name="etiquetaCorreo" id="correo" placeholder="ElbaCalao@panconmayo.cl"/>
        <br/>
        <label for="pass">Contraseña</label>
        <input type="password" name="contraseña" id="pass"/>
        <br/>
        <label for="fechaNac">Fecha de nacimiento</label>
        <input type="date" name="fechaNacimiento" id="fechaNac"/>
        </form>
            </center>
        </div>
        
    
    )
}

export default FormUserComponent; 