import React, { useCallback, useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import {ButtonComponent, TableUserComponent, FormUserComponent} from "../components"
import { getAllUsers, addUser, editUser, deleteUser } from "../service/User";
//ingreso manual de datos a la lista 
const usuario1=[
    {
        nombre: 'Joseph',
        apellido: 'Joestar',
        rut: '21238968-4',
        correo: 'jojo@gmail.com',
        nick: 'jojo123'
    },
    {
        nombre: 'Josuke',
        apellido: 'Higashikata',
        rut: '17238968-5',
        correo: 'johi@gmail.com',
        nick: 'johi123'
        },
        {
            nombre: 'diego',
            apellido: 'gatica',
            rut: '12834712-6',
            correo: 'diegogatica@gmail.com',
            nick: 'diegogatica369'
            }
    ];

const ListaUserPage = () => { 
    const navigate = useNavigate();
    const handleOnClick = useCallback(()=> navigate ("/",{}, [navigate]));
    //state vale lo mismo que usuario 1
    //genera una funcion setteadora que permite cambiar los datos de usuario1 sin afectarlo directamente
    const [user, setState] = useState(usuario1);
    const [usuarioEditado, setUsuarioEditado] = useState(null);

    useEffect(()=>{
        getUsers();
    },[])

    const getUsers =async()=>{
        const usuariosBD = await getAllUsers();
        setState(usuariosBD);
    }
    
    const userAdd = async(usuarioAgregado) =>{ 
        //en esta linea agregamos un usuario a la base de datos
        const usuarioBD = await addUser(usuarioAgregado);
        //aqui haremos que la tabla de actualice
        getUsers();
      }
    
    const userEdit = async(usuarioEditado) =>{
        const usuarioBD = await editUser(usuarioEditado);
        getUsers();
    }

    const userDelete = async(idUsuario)=>{
        const usuarioBD = await deleteUser(idUsuario);
        getUsers();
    }

    // SE COMENTAN ESTAS FUNCIONES YA QUE HAREMOS UNAS QUE APUNTEN A LAS APIS


   /*  const userDelete =(rutUsuario)=>{
        //esta funcion filtra mi lista de usuarios
        const changeUser = user.filter(usuario => usuario.rut != rutUsuario);
        //al momento de ocupar la funcion setState, le cambio el valor TEMPORAL a mis usuarios
        setState(changeUser)
    } */

   /*  const userAdd =(usuario)=>{
        const addUsuario =[
            //mantenme los datos que tengo en user y agregame lo que yo te entrego aqui (usuario)
            ...user, usuario 
        ]
        //luego actualizamos el state
        setState(addUsuario);
    } */ // aqui seria ingresar datos manualmente
    
   /*  const userEdit =(usuarioEditado)=>{
        const editUser =user.map(usuario => (usuario.rut === usuarioEditado.rut ? usuarioEditado : usuario))

        setState(editUser);
    } */


    return(
        <div>
            <FormUserComponent userAdd={userAdd} usuarioEditado={usuarioEditado} setUsuarioEditado={setUsuarioEditado} userEdit={userEdit}/>
            <br/>
            <TableUserComponent usuarios={user} deleteUser={userDelete} setUsuarioEditado={setUsuarioEditado}/>
            <br/>
        </div>
        )
    }

    export default ListaUserPage;
