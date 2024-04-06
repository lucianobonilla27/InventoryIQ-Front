import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/footer/Footer"
import Navegador from "./components/navbar/Navegador"
import Rutas from './components/rutas/Rutas';
import UsuariosContext from './context/UsuariosContext';



function App() {


  return (
    <>
    <UsuariosContext>
      <Navegador/>
     <Rutas/>
     <Footer/>
    </UsuariosContext>
     
    </>
  )
}

export default App;
