import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/footer/Footer"
import Navegador from "./components/navbar/Navegador"
import Rutas from './components/rutas/Rutas';
import UsuariosContext from './context/UsuariosContext';
import ProductsContext from "./context/ProductsContext";


function App() {


  return (
    <>

    <UsuariosContext>
    <ProductsContext>
      <Navegador/>
     <Rutas/>
     <Footer/>
     </ProductsContext>
    </UsuariosContext>
     

    </>
  )
}

export default App;
