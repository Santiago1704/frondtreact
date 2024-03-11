import React from "react";
// import 'https://cdn.jsdelivr.net/npm/simple-datatables@latest/dist/style.css';
// import '@fortawesome/fontawesome-free/css/all.css';
import { Chart } from "chart.js";
import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import bootstrapBundleMin from "bootstrap/dist/js/bootstrap.bundle.min";

export default function Administrador() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        console.log('Realizar búsqueda:', searchQuery);
    };

    const cerrarSesion = () => {
        console.log('Cerrar sesión');
    };
    return(
        <>
        <title>Dashboard - SB Admin</title>
        <body class="sb-nav-fixed">
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            {/* Navbar Brand */}
            <a className="navbar-brand ps-3" href="administrador.html">Dashboard Admin</a>
            {/* Sidebar Toggle */}
            <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!">
                {/* <FontAwesomeIcon icon="" /> */}
            </button>
            {/* Navbar Search */}
            <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <div className="input-group">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Search for..."
                        aria-label="Search for..."
                        aria-describedby="btnNavbarSearch"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button className="btn btn-primary" id="btnNavbarSearch" type="button" onClick={handleSearch}>
                        {/* <FontAwesomeIcon icon=""/> */}
                    </button>
                </div>
            </form>
            {/* Cerrar Sesión */}
            <a className="btn btn-primary" role="button" onClick={cerrarSesion} href="../index.html">Cerrar Sesión</a>
        </nav>

        </body>
        </>
        
    )
}