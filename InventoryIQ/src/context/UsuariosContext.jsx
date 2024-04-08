import { children, createContext, useEffect, useState } from "react";
import axios from "axios";
import { unstable_batchedUpdates } from "react-dom";

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

            const usuarioActual = JSON.parse(localStorage.getItem("user"));
            if (usuarioActual && usuarioActual.id === id) {
                logout();
            }

            setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
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


    // useEffect(() => {
            

    //     getUsers()
    // }
    // , [])

    useEffect(() => {
        const addDefaultUser = async () => {
            try {
                //ver si el usuario existe
                const existeUsuario = await axios.get(`http://localhost:7000/usuarios`);
                const existeUsuarioPredeterminado = existeUsuario.data.some(user => user.id === 1);
                //si no existe, se agrega el usuario predeterminado
                if (!existeUsuarioPredeterminado) {
                    await addUser({
                        id: 1, 
                        nombre: 'Admin' ,
                        email: 'admin@admin.com', 
                        password: 'Admin159@', 
                        confirmPassword: 'Admin159@', 
                        isAdmin: true
                    });
                    
                }
            } catch (error) {
                console.log('Error al cargar el usuario predeterminado', error)
                
            };
        };
        addDefaultUser();
        getUsers();
    }, []);

    return (
        <UsuariosProvider.Provider value={{ usuarios, getUsers, addUser, logout, editarUsuario, deleteUsuarios }}>
            {children}
        </UsuariosProvider.Provider>
    )
}

export default UsuariosContext;