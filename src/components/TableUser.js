import React from "react";
import ButtonComponent from "./Button";


const TableUserComponent = ({usuarios, deleteUser, setUsuarioEditado, userEdit}) => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">id</th>
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
                  <td>{usuario.id}</td>
                  <td>{usuario.name} {usuario.lastName}</td>
                  <td>{usuario.rut}</td>
                  <td>{usuario.email}</td>
                  <td><button
                type="button"
                class="btn btn-primary"
                onClick={() => {
                deleteUser(usuario.id);
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
