import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Nav.css';
import { Link } from 'react-router-dom';
export default function NavUser() {
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
                                     <a className="nav-link" href="/Usuario">Inicio <span className="sr-only"></span></a> 
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" to="/Usuario">Servicios</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" to="/Usuario">Galeria de imagenes</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" to="/Usuario">Clientes</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" to="/Usuario">Contactanos</Link>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                                <button className="btn my-2 my-sm-0 nav_search-btn" type="submit"></button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}