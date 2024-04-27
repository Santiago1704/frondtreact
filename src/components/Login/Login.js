import React, { useState } from "react";
import './Login.css';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (provider) => {
        try {
            if (provider === 'local') {
                // Iniciar sesión localmente
                const requestData = {
                    email: email,
                    password: password
                };

                const config = {
                    method: 'post',
                    url: 'http://127.0.0.1:8000/login/local',
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
                        redirigirSegunTipoUsuario(data.dataLogin.idroles);
                    }
                }
            } else if (provider === 'gitlab') {
                // Redirigir al endpoint de autorización de GitLab
                const clientId = process.env.REACT_APP_GITLAB_CLIENT_ID;
                const redirectUri = process.env.REACT_APP_REDIRECT_URI;
                const redirect_uri = `${window.location.origin}/login/gitlab/callback`;
                const authorize_url = `https://gitlab.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirect_uri}&response_type=code&scope=read_user`;
                window.location.href = authorize_url;
            }
        } catch (error) {
            manejarErrores(error);
        }
    };

    const manejarErrores = (error) => {
        if (error.response && error.response.status === 401) {
            console.log("Email o contraseña incorrectos");
            alert("Email o contraseña incorrectos");
        } else {
            console.error(error);
            alert("Hubo un problema durante el inicio de sesión. Por favor, inténtalo de nuevo más tarde.");
        }
    };

    const redirigirSegunTipoUsuario = (idroles) => {
        switch (idroles) {
            case 1:
                navigate('/Administrador');
                break;
            case 2:
                navigate('/Usuario');
                break;
            case 3:
                navigate('');
                break;
            default:
                console.log("Tipo de usuario desconocido");
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleLogin('local');
    };

    return (
        <div className="container-contact100">
            <div className="wrap-contact100">
                <form className="contact100-form validate-form" onSubmit={handleSubmit}>
                    <span className="contact100-form-title">
                        Inicio de Sesion
                    </span>

                    <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                        <input className="input100" type="email" name="email" id="email" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <span className="focus-input100"></span>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Password is required">
                        <input className="input100" type="password" name="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <span className="focus-input100"></span>
                    </div>

                    <div className="container-contact100-form-btn">
                        <button type="submit" className="contact100-form-btn">
                            Ingresar con cuenta
                        </button>
                        <button type="button" className="contact100-form-btn" onClick={() => handleLogin('gitlab')}>
                            Iniciar sesión con GitLab
                        </button>
                    </div>
                </form>

                <div className="contact100-more">
                    ¿Olvidaste tu contraseña? o <span className="contact100-more-highlight"> <Link to="/Register">Crea una cuenta</Link> </span>
                </div>
            </div>
        </div>
    )
}
