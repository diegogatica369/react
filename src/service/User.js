import axios from "axios";

import {url} from "./Config"

const addUser = async(usuario)=>{
// esta constante recibe la respuesta de la API 
const res = await axios.post(url + "/user",usuario);
console.log(res)
return res.data;

}

const getUser = async(id)=>{
    const res = await axios.get(url + "/user/"+id)
    console.log(res);
    return res.data;
}

const editUser = async(usuario)=>{
    const res = await axios.put(url + "/user", usuario);
    console.log(res);
    return res.data;
}

const deleteUser = async(id)=>{
    const res = await axios.delete(url + "/deleteUser/"+id);
    console.log(res);
    return res.data;
}

const getAllUsers = async()=>{
    const res = await axios.get(url + "/allUser")
    console.log(res)
    return res.data;
}

export {addUser, getUser, editUser, deleteUser, getAllUsers};