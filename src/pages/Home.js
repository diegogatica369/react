import React, { useCallback } from "react";
import {useNavigate} from "react-router-dom"
import {ButtonComponent, FormUserComponent} from "../components"
import "../App.css"
import "./Home.css"





const HomePage = () =>{
    const navigate = useNavigate();
    const handleOnClick = useCallback(()=> navigate("/Auto", {}, [navigate]));
    return(
        <div>
            <FormUserComponent/>
            <br/>
            <ButtonComponent infoButton={'Ir a autos'} handleOnClick={handleOnClick}/>  
        </div>
    )
}

export default HomePage;
