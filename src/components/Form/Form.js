import React from "react";
import './Form.css';
import '../../responsive.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Form() {
    return(
        <section className="map_section">
            <div className="form_container">
      <div className="row">
        <div className="col-12 offset-md-4">
          <form action="">
            <div className="text-center">
              <a name="contacto">
                <h3>Contactenos</h3>
              </a>
            </div>
            <div>
              <input type="text" placeholder="Nombre" className="pt-3" />
            </div>
            <div>
              <input type="text" placeholder="Telefono" />
            </div>
            <div>
              <input type="email" placeholder="Email" />
            </div>
            <div>
              <input type="text" className="message-box" placeholder="Mensaje" />
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit">ENVIAR</button>
            </div>
          </form>
        </div>
      </div>
    </div>

        </section>
    )
}