import React, { useState, useEffect } from "react";
import "../pages/Home.css"
import ButtonComponent from "./Button";

const initialUsuario ={
    name:"",
    lastName:"",
    email:"",
    id:"",
}

const FormUserComponent = ({userAdd, usuarioEditado, setUsuarioEditado, userEdit}) => {
    const [usuario, setUsuario] = useState(initialUsuario);
    const {name, lastName, email, id} = usuario

    //el hook useEffect siempre esta pendiente de si la variable que tiene dentro de sus corchetes cambia el deebera hacer todo lo que tiene en su funcion dentro
    //CONSIDERACION siempre corre al menos 1 vez cuando la pagina carga por primera vez
    useEffect(()=>{
    if(usuarioEditado!== null){
        setUsuario(usuarioEditado)
    }else{
        setUsuario(
            {
                name:"",
                LastName:"",
                email:"",
                id:""
            }
        )
    }
    },[usuarioEditado]);
  

    const handleInputChange=(e)=>{
        //se llama a esta funcion cada vez que escribimos algo en los inputs
        const changedFormValue = {
            //va a mantener los datos que tiene usuairo de los inputs que no he tocado
            //pero va actualizar el atributo que cambie por su nuevo valor
            ...usuario, 
            [e.target.name]:e.target.value
        }
        //finalmente los cambios deveran verse reflejados en nuetro hook
        setUsuario(changedFormValue);
    }

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
            {usuarioEditado!==null ? <h1>Editar Usuario</h1>:<h1>Ingrese Usuario</h1>}
        <label for="nameuser">id</label>
        <input type="text" name="id" id="id" value={id} onChange={handleInputChange} disabled/> 
        <br/>
        <label for="name">Nombre</label>
        <input type="text" name="name" id="name" placeholder="Elba" value={name} onChange={handleInputChange}/> 
        <br/>
        <label for="name">Apellido</label>
        <input type="text" name="lastName" id="lastName" placeholder="Calao" value={lastName} onChange={handleInputChange}/> 
        <br/>
        <label for="correo">Correo</label>
        <input type="email" name="email" id="email" placeholder="ElbaCalao@panconmayo.cl" value={email} onChange={handleInputChange}/>
        <div>
        {usuarioEditado !== null ? (
          <button
            type="button"
            class="btn btn-success"
            onClick={() => userEdit(usuario)}
          >
            Editar usuario
          </button>
        ) : (
          <button
            type="button"
            class="btn btn-success"
            onClick={() => userAdd(usuario)}
          >
            Ingresar usuario
          </button>
        )}
        {usuarioEditado !== null ? (
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => setUsuarioEditado(null)}
          >
            Cancelar
          </button>
        ) : (
          <></>
        )}


        </div>
        <br></br>
        <ButtonComponent infoButton={'Enviar Registro'}/>  
        </form>
            </center>
        </div>
    )
}

export default FormUserComponent; 