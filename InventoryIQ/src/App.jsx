import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/footer/Footer"
import Navegador from "./components/navbar/Navegador"
import Rutas from './components/rutas/Rutas';
import ProductsContext from "./context/ProductsContext";

function App() {


  return (
    <>
      <ProductsContext>
        <Navegador />
        <Rutas />
        <Footer />
      </ProductsContext>
    </>
  )
}

export default App
