import { createContext, useEffect, useState } from "react";
import axios from "axios";
import {jwtDecode} from "jwt-decode";
// import { unstable_batchedUpdates } from "react-dom";

export const UsuariosProvider = createContext()



const UsuariosContext = ({children}) => {

    const [usuarios, setUsuarios] = useState([])
    const [usuarioLogeado, setusuarioLogeado] = useState()


    //llamar a la api. GET trae, POST CREA,PUT edita y DELETE elimina.

    const getUsers = async () => {
        try{
            const response = await axios.get(`https://inventoryiq.onrender.com/api/users`);
            setUsuarios(response.data)
        } catch(error) {
            console.log(error)
        }
    };


    const addUser = async (usuario) => {
        try {
            let response = await axios.post(`https://inventoryiq.onrender.com/api/register`, usuario);
            setUsuarios([...usuarios, response.data]);
            return response; // Devuelve la respuesta de la solicitud
        } catch (error) {
            console.log(error);
            throw error; // Lanza el error para que pueda ser capturado en el componente
        }
    }
    
    const editarUsuario = async (usuario) => {
        try {
            let response = await axios.patch(`https://inventoryiq.onrender.com/api/user/${usuario._id}`, usuario);
            await getUsers(); // Actualiza la lista de usuarios después de editar
            return response; // Devuelve la respuesta de la solicitud
        } catch (error) {
            console.log(error);
            throw error; // Lanza el error para que pueda ser capturado en el componente
        }
    }
    

    const deleteUsuarios = async (_id) => {
        try {
            await axios.delete(`https://inventoryiq.onrender.com/api/user/delete/${_id}`)
            setUsuarios(usuarios.filter((usuario) => usuario._id !==_id));

            const usuarioActual = JSON.parse(localStorage.getItem("user"));
            if (usuarioActual && usuarioActual._id === _id) {
                logout();
            }

            setUsuarios(usuarios.filter((usuario) => usuario._id !== _id));
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

    const loginUser = async (usuario) => {
        try {
            const response = await axios.post(`https://inventoryiq.onrender.com/api/login`, usuario);
            const {token} = response.data
            const decoToken = jwtDecode(token)
            localStorage.setItem("user", JSON.stringify(decoToken));
            return setusuarioLogeado(decoToken)
        } catch (error) {
            throw new Error(error);
        }
    }


    useEffect(() => {
            
        getUsers()
    }
    , [])


    return (
        <UsuariosProvider.Provider value={{ usuarios, getUsers, addUser, logout, editarUsuario, deleteUsuarios, loginUser, usuarioLogeado }}>
            {children}
        </UsuariosProvider.Provider>
    )
}

export default UsuariosContext;