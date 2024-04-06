import { children, createContext, useEffect, useState } from "react";
import axios from "axios";

export const UsuariosProvider = createContext()



const UsuariosContext = ({children}) => {

    const [usuarios, setUsuarios] = useState([])


    //llamar a la api. GET trae, POST CREA,PUT edita y DELETE elimina.

    const getUsers = async () => {
        try{
            const response = await axios.get(`http://localhost:7000/usuarios`);
            setUsuarios(response.data)
        } catch(error) {
            console.log(error)
        }
    };


    const addUser = async (usuario) => {
        try {
            const response = await axios.post(`http://localhost:7000/usuarios`, usuario);
            setUsuarios([...usuarios, response.data]);
        } catch (error) {
            console.log(error);
        }
    }


    const editarUsuario = async (usuario) => {
        try {
            await axios.put(`http://localhost:7000/usuarios/${usuario.id}`, usuario);
            await getUsers();
        } catch (error) {
            console.log(error)
        }
    }

    const deleteUsuarios = async (id) => {
        try {
            await axios.delete(`http://localhost:7000/usuarios/${id}`)
            setUsuarios(usuarios.filter((usuario) => usuario.id !==id));
        } catch (error) {
            console.log(error)
        }
    }

    //funcion del logout
    //apenas hace el logout remueve todo del localstorage y navega al home-
    const logout = () => {
        localStorage.removeItem("user");
        window.location.href = "/";
    }


    useEffect(() => {
        getUsers()
    }
    , [])


    return (
        <UsuariosProvider.Provider value={{ usuarios, getUsers, addUser, logout, editarUsuario, deleteUsuarios }}>
            {children}
        </UsuariosProvider.Provider>
    )
}

export default UsuariosContext;