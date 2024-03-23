import React from "react";
import { Link } from "react-router-dom";

export default function Administrador() {
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
    <>
       <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
      {/* Navbar Brand */}
      <a className="navbar-brand ps-3" href="">
        <span>
          <Link
            to="/Administrador"
            style={{ marginLeft: "46px", color: "white" }}
          >
            Dashboard Admin
          </Link>
        </span>
      </a>
      {/* Sidebar Toggle */}
      <button
        className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
        id="sidebarToggle"
        href="#!"
      >
        {/* <FontAwesomeIcon icon="" /> */}
      </button>
      {/* Navbar Search */}
      <form
        className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0"
        style={{ marginTop: "20px" }}
      >
      </form>
      {/* Cerrar Sesión */}
      <button onClick={handleLogout} className="btn btn-white text-white">
      <Link to="/">Cerrar Sesión</Link>
      </button>
    </nav>
    </>
  );
}
