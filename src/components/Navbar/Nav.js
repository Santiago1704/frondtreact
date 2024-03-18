import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Nav.css';
import { Link } from 'react-router-dom';
export default function Nav() {
    return (
        <div>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg custom_nav-container">
                    <a className="navbar-brand" href="/">
                        <span>Walking legs</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                     <a className="nav-link" href="/">Inicio <span className="sr-only"></span></a> 
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#servicios">Servicios</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#galeria">Galeria de imagenes</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#clientes">Clinica</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contacto">Contactanos</a>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                                <button className="btn my-2 my-sm-0 nav_search-btn" type="submit"></button>
                            </form>
                        </div>
                        <div className="d-flex justify-content-center">
                        <Link to="/Login">Inicio de sesion</Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}