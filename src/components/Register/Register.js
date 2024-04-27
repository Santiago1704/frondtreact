import React, { useRef, useState, useEffect } from "react";
import './Register.css';
import axios from "axios";

export default function Register({ history }) {
    const [name, setName] = useState('');
    const [apellido, setApellido] = useState('');
    const [documento, setDocumento] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');
    const formRef = useRef(null);

    useEffect(() => {
        const form = formRef.current;
        form.addEventListener('submit', handleSubmit);

        return () => {
            form.removeEventListener('submit', handleSubmit);
        };
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const requestData = {
            name,
            apellido,
            documento,
            email,
            password,
            telefono,
            direccion
        };

        try {
            const response = await axios.post('http://127.0.0.1:8000/register_cliente', requestData);

            if (response.data.message === "Cliente registrado exitosamente.") {
                console.log("Cliente registrado exitosamente");
                alert("Cliente registrado exitosamente. Ahora puedes iniciar sesión.");
                // Limpiar el formulario
                setName('');
                setApellido('');
                setDocumento('');
                setEmail('');
                setPassword('');
                setTelefono('');
                setDireccion('');
                // Redirigir a la página de inicio de sesión
                history.push('/Login');
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                alert(error.response.data.message);
            } else {
                alert("Hubo un problema durante el registro. Por favor, inténtalo de nuevo.");
            }
        }
    };

    const handleReset = () => {
        setName('');
        setApellido('');
        setDocumento('');
        setEmail('');
        setPassword('');
        setTelefono('');
        setDireccion('');
    };

    return (
        <div className="page-wrapper bg-blue p-t-100 p-b-100 font-robo">
            <div className="wrapper wrapper--w680">
                <div className="card card-1">
                    <div className="card-heading"></div>
                    <div className="card-body">
                        <h2 className="title">Informacion de registro</h2>
                        <form ref={formRef} method="POST" id="formulario">
                            <div className="input-group">
                                <input className="input--style-1" type="text" placeholder="NOMBRE" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="input-group">
                                <input className="input--style-1" type="text" placeholder="APELLIDO" name="apellido" id="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                            </div>
                            <div className="input-group">
                                <input className="input--style-1 js-datepicker" type="text" placeholder="No DE DOCUMENTO" name="documento" id="documento" value={documento} onChange={(e) => setDocumento(e.target.value)} />
                                <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                            </div>
                            <div className="input-group">
                                <input className="input--style-1" type="text" placeholder="CORREO" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="input-group">
                                <input className="input--style-1" type="text" placeholder="TELEFONO" name="telefono" id="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                            </div>
                            <div className="input-group">
                                <input className="input--style-1" type="text" placeholder="DIRECCION" name="direccion" id="direccion" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
                            </div>
                            <div className="input-group">
                                <input className="input--style-1" type="password" placeholder="CONTRASEÑA" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="p-t-50">
                                <button type="submit" id="submit" className="btn btn--radius btn-success" onClick={handleSubmit}>
                                    Registrar
                                </button>
                                <button type="button" className="btn btn--radius btn-success" onClick={handleReset}>
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
