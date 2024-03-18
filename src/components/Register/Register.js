import React from "react";
import './Register.css';
export default function Register(){
    return (
        <div className="page-wrapper bg-blue p-t-100 p-b-100 font-robo">
            <div className="wrapper wrapper--w680">
                <div className="card card-1">
                    <div className="card-heading"></div>
                    <div className="card-body">
                        <h2 className="title">Informacion de registro</h2>
                        <form method="POST" id="formulario">
                            <div className="input-group">
                                <input className="input--style-1" type="text" placeholder="NOMBRE" name="name" id="name" />
                            </div>
                            <div className="input-group">
                                <input className="input--style-1" type="text" placeholder="APELLIDO" name="apellido" id="apellido" />
                            </div>
                            <div className="row row-space">
                                <div className="col-2">
                                    <div className="input-group">
                                        <input className="input--style-1 js-datepicker" type="text" placeholder="No DE DOCUMENTO" name="documento" id="documento" />
                                        <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="input-group">
                                        <div className="rs-select2 js-select-simple select--no-search">
                                            <select name="tipo">
                                                <option disabled="disabled" selected="selected">TIPO DE DOCUMENTO</option>
                                                <option>Cedula</option>
                                                <option>Tarjeta de Identidad</option>
                                                <option>Cedula de extranjeria</option>
                                                <option>Registro Civil</option>
                                            </select>
                                            <div className="select-dropdown"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="input-group">
                                <input className="input--style-1" type="text" placeholder="CORREO" name="email" id="email" />
                            </div>
                            <div className="input-group">
                                <input className="input--style-1" type="text" placeholder="TELEFONO" name="telefono" id="telefono" />
                            </div>
                            <div className="input-group">
                                <input className="input--style-1" type="text" placeholder="DIRECCION" name="direccion" id="direccion" />
                            </div>
                            <div className="input-group">
                                <input className="input--style-1" type="password" placeholder="CONTRASEÑA" name="password" id="password" />
                            </div>
                            <div className="p-t-50">
                                <button type="submit" className="btn btn--radius btn--green">
                                    Registrar
                                </button>
                                <button type="reset" className="btn btn--radius btn--green">
                                    Borrar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}