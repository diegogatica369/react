import React from "react";
import ButtonComponent from "./Button";


const TableUserComponent = ({usuarios, deleteUser, setUsuarioEditado, userEdit}) => {
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
        {usuarios.map(usuario=>(
                  <tr>
                  <th scope="row">1</th>
                  <td>{usuario.nick}</td>
                  <td>{usuario.nombre} {usuario.apellido}</td>
                  <td>{usuario.rut}</td>
                  <td>{usuario.correo}</td>
                  <td><button
                type="button"
                class="btn btn-primary"
                onClick={() => {
                deleteUser(usuario.rut);
                }}
                >
                Eliminar
                </button>
                <button
                type="button"
                class="btn btn-warning"
                onClick={() => {
                setUsuarioEditado(usuario);
                }}
                >
                Editar
                </button></td>
                </tr>
        ))}

      </tbody>
    </table>
  );
};

export default TableUserComponent;
