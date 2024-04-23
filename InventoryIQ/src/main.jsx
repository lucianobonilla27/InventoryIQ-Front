
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Rutas } from 'react-router-dom'
import '../src/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Rutas>
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
  </Rutas>
)