import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Nav.css';
import { Link } from 'react-router-dom';
export default function NavUser() {
    const handleLogout = () => {
        const isConfirmed = window.confirm("¿Estás seguro que deseas cerrar sesión?");
        if (isConfirmed) {
          // Aquí puedes agregar la lógica para cerrar la sesión
          // Por ejemplo, puedes enviar una solicitud al servidor para cerrar la sesión
          // y limpiar los datos de sesión del lado del cliente
          console.log("Cerrando sesión...");
        } else {
          console.log("Operación de cierre de sesión cancelada.");
        }
      };
    return (
        <div>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg custom_nav-container">
                    <a className="navbar-brand fs-5" href="/">
                        <span><Link to="/Usuario" style={{marginLeft:'19px'}} >Bienvenido Usuario</Link></span>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                <Link className="nav-link" to="/Usuario">Inicio</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" to="/Paseos">Paseos</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" to="/Usuario">Galeria de imagenes</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" to="/Usuario">Clientes</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="mb-1">
                                <button type="button" className="btn  fs-6 w-100 ">
                                <button onClick={handleLogout}><Link to="/Login">Cerrar Sesion</Link></button>
                                </button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}