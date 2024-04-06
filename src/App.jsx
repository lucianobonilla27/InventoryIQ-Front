import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/footer/Footer"
import Navegador from "./components/navbar/Navegador"
import ProductsContext from "./context/ProductsContext";
import ConsultasContext from './context/ConsultasContext';
import Rutas from "./components/rutas/Rutas";


function App() {


  return (
    <>
      
      <ProductsContext>
      <ConsultasContext>
        <Navegador />
        <Rutas />
        <Footer />
        </ConsultasContext>
      </ProductsContext>
      
    </>
  )
}

export default App
