import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Client.css';

export default function Client() {
    return(
        <section className="client_section layout_padding-bottom">
            <div className="container">
            <a name="clientes">
                <h2 className="custom_heading text-center">
                    Lo que dicen Nuestros
                    <span>
                        Clientes
                    </span>
                </h2>
            </a>
            <div id="carouselExample2Indicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExample2Indicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExample2Indicators" data-slide-to="1"></li>
                    <li data-target="#carouselExample2Indicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="layout_padding2 pl-100">
                            <div className="client_container">
                                <div className="img_box">
                                    <img src="images/client.jpg" alt="" />
                                </div>
                                <div className="detail_box">
                                    <h5>Sandy Mark</h5>
                                    <p>
                                        "Estoy encantada con los servicios de Walking Legs. Mi mascota significa el mundo para mí,
                                        y encontrar un lugar que ofrezca cuidado y alimentación de alta calidad ha sido un alivio. Siempre
                                        puedo contar con ellos para mantener a mi peludo amigo feliz y saludable."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="layout_padding2 pl-100">
                            <div className="client_container">
                                <div className="img_box">
                                    <img src="images/opinion.jpg" width="210px" alt="" />
                                </div>
                                <div className="detail_box">
                                    <h5>Andres Gomez</h5>
                                    <p>
                                        "No puedo expresar lo agradecido que estoy con Walking legs por el increíble cuidado y alimentación
                                        que brindan a mi mascota. Han demostrado un amor genuino por los animales, y eso se refleja en la
                                        atención que le brindan a mi compañero peludo. Desde los paseos hasta las comidas, sé que mi mascota
                                        está en las mejores manos. ¡Son excepcionales!"
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </section>
    )
}