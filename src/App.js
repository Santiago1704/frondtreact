import React from "react";
import './App.css';
import Nav from './components/Navbar/Nav';
import Carruzel from './components/Carruzel/Carruzel';
import Footer from './components/Footer/Footer';
import About from './components/Aboutus/About';
import Service from './components/Services/Services';
import Galery from './components/Galery/Galery';
import Client from './components/Client/Client';
import Info from './components/Info/Info';
import Form from './components/Form/Form';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Usuario from "./Pages/Usuario/Usuario";
import Admin from "./Pages/Admin/Admin";
import Paseos from "./components/Paseos/Paseos";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const hideNavFooterInfo = location.pathname === '/Usuario' || location.pathname === '/Administrador';; // Verifica si la ruta actual es '/Usuario'

  return (
    <div className="App">
      <div className='hero_area'>
        {!hideNavFooterInfo && <Nav />}
        <Routes>
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/About' element={<About />} />
          <Route path='/Service' element={<Service />} />
          <Route path='/Galery' element={<Galery />} />
          <Route path='/Client' element={<Client />} />
          <Route path='/Form' element={<Form />} />
          <Route path='/' element={<Carruzel />} />
          <Route path='/Usuario' element={<Usuario />} />
          <Route path='/Administrador' element={<Admin/>}/>
          <Route path="/Paseos" element={<Paseos/>}/>
        </Routes>
        {!hideNavFooterInfo && <Info />}
        {!hideNavFooterInfo && <Footer />}
      </div>
    </div>
  );
}

export default App;
