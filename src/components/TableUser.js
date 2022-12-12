import React from "react";
const TableUserComponent = () => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Usuario</th>
          <th scope="col">Nombre</th>
          <th scope="col">Rut</th>
          <th scope="col">Correo</th>
          <th scope="col">Acción</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>@marcianeke</td>
          <td>Marcianeke Simpson</td>
          <td>223334442</td>
          <td>marcianeke@corte.cl</td>
          <td>?</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>@jordan23</td>
          <td>Jordan Veintitres</td>
          <td>998887776</td>
          <td>jordan23@corte.cl</td>
          <td>?</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableUserComponent;
