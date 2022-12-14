import React from "react";
import ButtonComponent from "./Button";

const FormCarComponent = () => {
    return(
        <div>
            <div>
            <center>
                <img src="https://www.pngplay.com/wp-content/uploads/13/Porsche-Carrera-GT-Background-PNG.png" alt="Esta es una imagen que no ha cargado como deberia" width="350" height="175"/>
            </center>
            </div>
            <center>
            <h1><b>REGISTRO NUEVO AUTO</b></h1>
        <form  class="csscar">
        <label for="modelcar">Modelo del auto</label>
        <input type="text" name="etiquetaModelo" id="modelo" placeholder="modelo del auto?"/> 
        <br/>
        <label for="brand">Marca</label>
        <input type="text" name="etiquetaMarcaAuto" id="marca" placeholder="marca del auto?"/> 
        <br/>
        <label for="number">Año</label>
        <input type="number" name="etiquetaAñoAuto" id="año" placeholder="año del auto?"/>
        <br/>
        <label for="color">Color</label>
        <input type="text" name="etiquetaColorAuto" id="color" placeholder="color del auto?"/>
        <br/>
        <label for="Patente">Patente</label>
        <input type="text" name="etiquetaPatenteAuto" id="patente" placeholder="patente del auto?"/>
        <br/>
        <label for="valor">Valor</label>
        <input type="taxt" name="etiquetaValorAuto" id="valor" placeholder="Valor del auto?"/>
        </form>
        <ButtonComponent infoButton={'Registrar Auto'}/>  
            </center>
        </div>
    )
}
export default FormCarComponent; 