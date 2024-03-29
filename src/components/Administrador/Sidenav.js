import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Administrador.css";
import Chart from "chart.js/auto";
export default function Sidenav() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    obtenerUsuarios();
    crearGraficas();
  }, []);

  function obtenerUsuarios() {
    const url = "http://127.0.0.1:8000/obtener_usuarios";

    axios
      .get(url)
      .then((response) => {
        setUsuarios(response.data);
      })
      .catch((error) => {
        console.error(error);
        alert(
          "Hubo un problema al obtener los informes solicitados. Por favor, inténtalo de nuevo más tarde."
        );
      });
  }
  function crearGraficas() {
    // Destruir gráfico existente si existe
    Chart.getChart("grafica")?.destroy();
    Chart.getChart("grafica1")?.destroy();
  
    // Crear gráfico de barras
    const labels = ["Enero", "Febrero", "Marzo", "Abril"];
    const graph = document.querySelector("#grafica");
    const data = {
      labels: labels,
      datasets: [
        {
          label: "Paseos por mes",
          data: [1, 2, 3, 4],
          backgroundColor: "rgba(9, 129, 176, 0.2)",
        },
      ],
    };
    const config = {
      type: "bar",
      data: data,
    };
    new Chart(graph, config);
  
    // Crear gráfico de líneas
    const etiquetas = ["Enero", "Febrero", "Marzo", "Abril"];
    const grafica1 = document.querySelector("#grafica1");
    const datosVentas2020 = {
      label: "Ventas por mes",
      data: [5000, 1500, 8000, 5102],
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1,
    };
    const config1 = {
      type: "line",
      data: {
        labels: etiquetas,
        datasets: [datosVentas2020],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    };
    new Chart(grafica1, config1);
  }
  return (
    <div id="layoutSidenav">
      <div id="layoutSidenav_nav">
        <nav
          className="sb-sidenav accordion sb-sidenav-dark"
          id="sidenavAccordion"
        >
          <div className="sb-sidenav-menu">
            <div className="nav">
              <div className="sb-sidenav-menu-heading">Core</div>
              <a className="nav-link" href="administrador.html">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-tachometer-alt"></i>
                </div>
                Dashboard
              </a>
              <div
                className="collapse"
                id="collapseLayouts"
                aria-labelledby="headingOne"
                data-bs-parent="#sidenavAccordion"
              >
                <nav className="sb-sidenav-menu-nested nav">
                  <a className="nav-link" href="layout-sidenav-light.html">
                    Static Navigation
                  </a>
                  <a className="nav-link" href="layout-sidenav-light.html">
                    Light Sidenav
                  </a>
                </nav>
              </div>
              <div className="sb-sidenav-menu-heading">Datos</div>
              <a className="nav-link" href="">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-chart-area"></i>
                </div>
                Control de paseos
              </a>
              <div className="sb-sidenav-menu-heading">Analisis de datos</div>
              <a className="nav-link" href="charts.html">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-chart-area"></i>
                </div>
                Analitica
              </a>
            </div>
          </div>
          <div className="sb-sidenav-footer">
            <div className="small">Logged in as:</div>
            Dashboard Administrador
          </div>
        </nav>
      </div>
      <div id="layoutSidenav_content">
        <main>
          <div className="container-fluid px-4">
            <h1 className="mt-4">Bienvenido Administrator!</h1>
            <br />
            <div className="row">
              <div className="col-xl-6">
                <div className="card mb-4">
                  <div className="card-header">
                    <i className="fas fa-chart-area me-1"></i>
                    Area de analisis de los datos
                  </div>
                  <div className="card-body">
                    <canvas id="grafica1" width="100%" height="40"></canvas>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="card mb-4">
                  <div className="card-header">
                    <i className="fas fa-chart-bar me-1"></i>
                    Diagrama de barras de datos
                  </div>
                  <div className="card-body">
                    <canvas id="grafica" width="100%" height="40"></canvas>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-4">
              <div className="card-header">
                <i className="fas fa-table me-1"></i>
                Lista de Usuarios
              </div>
              <div className="card-body">
                <table
                  id="tablacontacs"
                  className="table table-striped mt-3"
                  style={{ width: "100%" }}
                >
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Apellido</th>
                      <th>Documento</th>
                      <th>Correo</th>
                      <th>Telefono</th>
                    </tr>
                  </thead>

                  <tbody id="tabla-usuarios">
                    {usuarios.map((usuario) => (
                      <tr key={usuario.documento}>
                        <td>{usuario.nombre}</td>
                        <td>{usuario.apellido}</td>
                        <td>{usuario.documento}</td>
                        <td>{usuario.correo}</td>
                        <td>{usuario.telefono}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
        <footer className="py-4 bg-light mt-auto">
          <div className="container-fluid px-4">
            <div className="d-flex align-items-center justify-content-between small">
              <div className="text-muted">
                Copyright &copy; Your Website 2022
              </div>
              <div>
                <a href="#">Privacy Policy</a>
                &middot;
                <a href="#">Terms &amp; Conditions</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
