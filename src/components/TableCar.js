import React from "react";
import ButtonComponent from "./Button";


const TableCarComponent = ({autos, deleteAuto}) => {
  return (
    <div>
        <br/>
        <center><h4>Tabla de autos</h4></center>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Propietario</th>
            <th scope="col">Marca</th>
            <th scope="col">Modelo</th>
            <th scope="col">Año</th>
            <th scope="col">patente</th>
            <th scope="col">Acción</th>
          </tr>
        </thead>
        <tbody>
        {autos.map(auto=>(
          <tr>
            <th scope="row">1</th>
            <td>{auto.propietario}</td>
            <td>{auto.marca}</td>
            <td>{auto.modelo}</td>
            <td>{auto.año}</td>
            <td>{auto.patente}</td>
            <td><button
                type="button"
                class="btn btn-primary"
                onClick={() => {
                deleteAuto(auto.modelo);
                }}
                >
                Eliminar
                </button></td>
                </tr>
                ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableCarComponent;
