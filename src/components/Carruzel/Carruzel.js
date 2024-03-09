import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Carruzel.css';

export default function Carruzel() {
    return (
        <section className="slider_section position-relative">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-4 offset-md-2">
                                    <div className="slider_detail-box">
                                        <h1>
                                            Paseo
                                            <span>
                                                para tu mascota
                                            </span>
                                        </h1>
                                        <p>
                                            Regala a tu mascota un paseo lleno de alegría. ¡Reserva ahora y dale a tu amigo peludo un día
                                            inolvidable!
                                        </p>
                                        <div className="btn-box">
                                            <a href="" className="btn-1">
                                                Comprar
                                            </a>
                                            <a href="" className="btn-2">
                                                Contacto
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="slider_img-box">
                                        <a href="" className="imagen" ></a>
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