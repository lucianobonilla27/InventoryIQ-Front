import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductosProvider = createContext();


const ProductsContext = ({ children }) => {
  const [productos, setProductos] = useState([]);


  const getProductos = async () => {
    try {
      const response = await axios.get("https://inventoryiq.onrender.com/api/products");
      setProductos(response.data);
    } catch (error) {
      console.log(error);
    }
  };



  const addProductos = async (producto) => {
    try {
      const response = await axios.post(
        "https://inventoryiq.onrender.com/api/agregarProduct",
        producto
      );
      setProductos([...productos, response.data]);
      return response; // Devuelve la respuesta de la solicitud
    }catch (error) {
      console.log(error);
      throw error; // Lanza el error para que pueda ser capturado en el componente

    }
  };

  //Editar Producto

  const editarProducto = async (producto) => {
    try {
      await axios.put(
        `https://inventoryiq.onrender.com/api/editarProduct/${producto._id}`,
        producto
      );

      await getProductos();
    } catch (error) {
      console.log(error);
    }
  };



  const deleteProductos = async (_id) => {

    try {
      await axios.delete(`https://inventoryiq.onrender.com/api/eliminarProduct/${_id}`);
      setProductos(productos.filter((producto) => producto._id !== _id));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <ProductosProvider.Provider
      value={{
        productos,
        getProductos,
        addProductos,
        editarProducto,
        deleteProductos,
      }}
    >
      {children}
    </ProductosProvider.Provider>
  );
};

export default ProductsContext;