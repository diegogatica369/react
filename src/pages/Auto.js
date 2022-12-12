import React from "react";
import {ButtonComponent, FormCarComponent, TableCarComponent,} from "../components"
import "../App.css"
import "./Home.css"

const AutoPage = () =>{
    return(
        <div>
            
            <FormCarComponent/>
            <br/>
            <ButtonComponent/>
            <TableCarComponent/>
        </div>
    )
}

export default AutoPage;