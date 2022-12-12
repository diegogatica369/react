import React from "react";

const TableCarComponent = () => {
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
          <tr>
            <th scope="row">1</th>
            <td>Jordan Veintitres</td>
            <td>Chevrolet</td>
            <td>Spark</td>
            <td>2012</td>
            <td>BB-BB-10</td>
            <td>?</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Marcianeke Simpson</td>
            <td>Subaru</td>
            <td>Impreza</td>
            <td>1999</td>
            <td>MM-MM-69</td>
            <td>?</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableCarComponent;
