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
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Administrador from './components/Administrador/Administrador';
function App() {
  return (
    <Router>
      <div className="App">
        <div className='hero_area'>
          <header className='header_section'>
            <Nav/>
            <Routes>
            <Route path='/Login' element={<Login />}/>
            <Route path='/Register' element={<Register/>}/>
            </Routes>
          </header>
          <Carruzel/>
          <About/>
          <Service/>
          <Galery/>
          <br/>
          <Client/>
          <Form/>
          <Info/>
          <Footer/>
        </div>
      </div>
    </Router>
  );
}

export default App;
