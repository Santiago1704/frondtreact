import React from "react";
import './Login.css';
import { Link } from "react-router-dom";
export default function Login() {
    return (
        <div className="container-contact100">
            <div className="wrap-contact100">
                <form className="contact100-form validate-form">
                    <span className="contact100-form-title">
                        Inicio de Sesion
                    </span>

                    <div className="wrap-input100 validate-input" data-validate="Please enter your name">
                        <input className="input100" type="text" name="email" placeholder="Email" required />
                        <span className="focus-input100"></span>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Please enter email: e@a.x">
                        <input className="input100" type="text" name="password" placeholder="Password" required />
                        <span className="focus-input100"></span>
                    </div>

                    {/* <div className="wrap-input100 validate-input" data-validate="Please enter your message">
                        <textarea className="input100" name="message" placeholder="Your Message" required></textarea>
                        <span className="focus-input100"></span>
                    </div> */}

                    <div className="container-contact100-form-btn">
                        <button className="contact100-form-btn">
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