import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/footer/Footer"
import Navegador from "./components/navbar/Navegador"
import Rutas from './components/rutas/Rutas';
import UsuariosContext from './context/UsuariosContext';
import ProductsContext from "./context/ProductsContext";
import ConsultasContext from './context/ConsultasContext';


function App() {


  return (
    <>

      <UsuariosContext>
        <ProductsContext>
        <ConsultasContext>
        <Navegador />
            <Rutas />
            <Footer />
            </ConsultasContext> 
        </ProductsContext>
      </UsuariosContext>
      

    </>
  )
}

export default App;
