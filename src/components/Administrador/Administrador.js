import React from "react";
import { Link } from "react-router-dom";

export default function Administrador() {
  return (
    <>
      <title>Dashboard - SB Admin</title>
      <body class="sb-nav-fixed">
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
          <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0" style={{marginTop:'20px'}}>
            <div className="input-group">
              <input
                className="form-control"
                type="text"
                placeholder="Search for..."
                aria-label="Search for..."
                aria-describedby="btnNavbarSearch"
              />
              <button
                className="btn btn-primary"
                id="btnNavbarSearch"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </button>
            </div>
          </form>
          {/* Cerrar Sesión */}
          <a className="btn btn-primary" role="button" href="">
            <Link to='/'>Cerrar Sesión</Link>
          </a>
        </nav>
      </body>
    </>
  );
}
