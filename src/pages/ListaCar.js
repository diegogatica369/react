import React, { useCallback, useState } from "react";
import {useNavigate} from "react-router-dom"
import {ButtonComponent, TableCarComponent} from "../components"

const auto1=[
    {
        propietario: 'Joseph Joestar',
        marca: 'Kia',
        modelo: 'Rio 5',
        año: '2015',
        patente: 'BB-AA-432'
    },
    {
        propietario: 'Josuke Higashikata',
        marca: 'Chevrolet',
        modelo: 'Spark GT',
        año: '2013',
        patente: 'AA-BB-123'
    },
];
const ListaCarPage = () => {
    const navigate = useNavigate();
    const handleOnClick = useCallback(()=> navigate ("/",{}, [navigate]));
    const [auto, setState] = useState(auto1);

    const autoDelete =(modeloAuto)=>{
        //esta funcion filtra mi lista de usuarios
        const changeAuto = auto.filter(auto => auto.modelo != modeloAuto);
        //al momento de ocupar la funcion setState, le cambio el valor TEMPORAL a mis usuarios
        setState(changeAuto)
    }
    return(
        <div>
            <TableCarComponent autos={auto} deleteAuto={autoDelete}/>
            <br/> 
        </div>
        )
    }

    export default ListaCarPage;
