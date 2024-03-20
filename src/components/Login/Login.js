import React, { useState } from "react";
import './Login.css';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = async () => {
        try {
            const requestData = {
                email: email,
                password: password
            };

            const config = {
                method: 'post',
                url: 'http://127.0.0.1:8000/login',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + btoa(email + ':' + password)
                },
                data: requestData
            };

            const response = await axios(config);

            if (response.status === 200) {
                const data = response.data;
                if (data.message === "Logged in successfully") {
                    alert("Has iniciado sesión correctamente");

                    const tipoUsuarioMap = {
                        1: "administrador",
                        2: "usuario",
                        3: "paseador"
                    };

                    const tipoUsuario = tipoUsuarioMap[data.dataLogin.idroles];

                    guardarUsuarioEnLocalStorage({
                        tipo_usuario: tipoUsuario,
                        correo: data.dataLogin.correo,
                        nombre: data.dataLogin.nombre,
                        id: data.dataLogin.id
                    });

                    redirigirSegunTipoUsuario(tipoUsuario);
                }
            }
        } catch (error) {
            manejarErrores(error);
        }
    };

    // Función para redirigir según el tipo de usuario
    const redirigirSegunTipoUsuario = (tipoUsuario) => {
        switch (tipoUsuario) {
            case "administrador":
                console.log("Redirigir a la página del admin");
                navigate('/administrador'); // Utiliza navigate en lugar de history.push
                break;
            case "usuario":
                console.log("Redirigir a la página del usuario");
                navigate('/Usuario'); // Utiliza navigate en lugar de history.push
                break;
            case "paseador":
                console.log("Redirigir a la página del paseador");
                navigate(''); // Utiliza navigate en lugar de history.push
                break;
            default:
                console.log("Tipo de usuario desconocido");
        }
    };


    // Función para manejar errores durante el inicio de sesión
    const manejarErrores = (error) => {
        if (error.response && error.response.status === 401) {
            console.log("Email o contraseña incorrectos");
            alert("Email o contraseña incorrectos");
        } else {
            console.error(error);
            alert("Hubo un problema durante el inicio de sesión. Por favor, inténtalo de nuevo más tarde.");
        }
    };

    // Función para guardar usuario en localStorage
    const guardarUsuarioEnLocalStorage = (usuario) => {
        localStorage.setItem('usuario', JSON.stringify(usuario));
    };

    // Manejar el evento del formulario
    const handleSubmit = (event) => {
        event.preventDefault();
        login();
    };

    return (
        <div className="container-contact100">
            <div className="wrap-contact100">
                <form className="contact100-form validate-form" onSubmit={handleSubmit}>
                    <span className="contact100-form-title">
                        Inicio de Sesion
                    </span>

                    <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                        <input className="input100" type="email" name="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <span className="focus-input100"></span>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Password is required">
                        <input className="input100" type="password" name="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <span className="focus-input100"></span>
                    </div>

                    {/* <div className="wrap-input100 validate-input" data-validate="Please enter your message">
                        <textarea className="input100" name="message" placeholder="Your Message" required></textarea>
                        <span className="focus-input100"></span>
                    </div> */}

                    <div className="container-contact100-form-btn">
                        <button  type="submit" className="contact100-form-btn">
                           ENVIAR
                        </button>
                    </div>
                </form>

                <div className="contact100-more">
                Olvidaste tu contraseña? o <span className="contact100-more-highlight"> <Link to="/Register">Crea una cuenta</Link> </span>
                </div>
            </div>
        </div>
    )
}