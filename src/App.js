import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { AutoPage, HomePage, ListaUserPage, ListaCarPage } from "./pages";

const App =()=>{
  return(
    //desde el navegador
    <BrowserRouter>
    {/*vamos a tener distintas rutas*/}
    <Routes>
        {/* especificamos ruta */}
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Auto" element={<AutoPage/>}/>
        <Route path="/ListaUser" element={<ListaUserPage/>}/>
        <Route path="/ListaCar" element={<ListaCarPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;