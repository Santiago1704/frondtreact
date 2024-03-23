import React, { useState } from 'react';
import "./Paseos.css";
import axios from 'axios';

export default function Paseos() {
  const [tipoMascota, setTipoMascota] = useState('');
  const [direccion, setDireccion] = useState('');
  const [duracion, setDuracion] = useState('');
  const [fecha, setFecha] = useState('');
  const [idCliente, setIdCliente] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await solicitarPaseo();
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data && error.response.data.message) {
        alert(error.response.data.message);
      } else {
        alert("Hubo un problema durante la solicitud del servicio. Por favor, inténtalo de nuevo más tarde.");
      }
    }
  };

  const solicitarPaseo = async () => {
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    const idCliente = usuario.idusuario;
    setIdCliente(idCliente);

    const requestData = {
      tipo_mascota: tipoMascota,
      direccion: direccion,
      duracion: duracion,
      fecha: fecha,
      idusuario: idCliente
    };

    const config = {
      method: 'post',
      url: 'http://127.0.0.1:8000/solicitar_paseo',
      headers: {
        'Content-Type': 'application/json'
      },
      data: requestData,
      withCredentials: true
    };

    const response = await axios(config);
    console.log(response.data);
    alert("Servicio solicitado exitosamente.");
  };

  return (
    <div className="container-paseo">
      <form id="contactus" onSubmit={handleSubmit}>
        <h3>Solicitar Paseo</h3>
        <fieldset>
          <label htmlFor="tipo_mascota" className="form-label"><span className="text-info">Tipo de Mascota  </span></label>
          <select className="form-select" id="tipo_mascota" name="tipo_mascota" value={tipoMascota} onChange={(e) => setTipoMascota(e.target.value)}>
            <option value="perro">Perro</option>
            <option value="gato">Gato</option>
          </select>
        </fieldset>
        <fieldset>
          <label htmlFor="direccion" className="form-label">
            <span className="text-info">Dirección</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="direccion"
            name="direccion"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            placeholder="Ingrese su dirección"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="duracion" className="form-label">
            <span className="text-info">Duración</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="duracion"
            name="duracion"
            value={duracion}
            onChange={(e) => setDuracion(e.target.value)}
            placeholder="Ingrese la duración del paseo"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="fecha" className="form-label">
            <span className="text-info">Fecha y hora programada</span>
          </label>
          <input
            type="date"
            className="form-control"
            id="fecha"
            name="fecha"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </fieldset>
        <input type="hidden" id="idusuario" name="idusuario" value={idCliente} />
        <fieldset>
          <textarea
            placeholder="Escribe tu mensaje aquí"
            tabIndex="5"
            className="form-control"
            required
          ></textarea>
        </fieldset>
        <fieldset>
          <button
            type="submit"
            id="contactus-submit"
            data-submit="...Sending"
          >
            Solicitar
          </button>
        </fieldset>
      </form>
    </div>
  );
}
