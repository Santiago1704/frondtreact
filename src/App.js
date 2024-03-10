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

function App() {
  return (
    <div className="App">
      <div className='hero_area'>
        <header className='header_section'>
          <Nav />
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
  );
}

export default App;
