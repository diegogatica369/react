import React from "react";
import {ButtonComponent, FormCarComponent, FormUserComponent, TableCarComponent, TableUserComponent} from "../components"
import "../App.css"
import "./Home.css"

const HomePage = () =>{
    return(
        <div>
            <FormUserComponent/>
            <br/>
            <ButtonComponent/>  
            <TableUserComponent/>
            
        </div>
    )
}

export default HomePage;
