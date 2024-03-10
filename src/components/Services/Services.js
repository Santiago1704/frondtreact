import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Services.css';
import '../../responsive.css';
import imagen1 from '../../images/s-1.png';
import imagen2 from '../../images/s-2.png';
import imagen3 from '../../images/s-3.png';
import imagen4 from '../../images/494b49727a62b580024be500be9caf60-fotor-bg-remover-20231030153818.png';
export default function Service() {
    return (
        <section className="service_section layout_padding">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 offset-md-2">
                        <a name="servicios">
                            <h2 className="custom_heading">
                                Nuestros <span> Servicios </span>
                            </h2>
                        </a>
                        <div className="container layout_padding2">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="img_box">
                                        <img src={imagen1} alt="" />
                                    </div>
                                    <div className="detail_box">
                                        <h6>
                                            Paseo de tus mascotas
                                        </h6>
                                        <p>
                                            Dale a tu mascota la atención que se merece. Nuestros paseos cuidadosamente programados mantendrán a
                                            tu amigo de cuatro patas feliz y activo. ¡Reserva ahora!
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="img_box">
                                        <img src={imagen2} alt="" />
                                    </div>
                                    <div className="detail_box">
                                        <h6>
                                            Alimentacion
                                        </h6>
                                        <p>
                                            En Walking legs, cuidamos y alimentamos a tu mascota como parte de nuestra familia. Confía en
                                            nosotros para su bienestar. ¡Contáctanos ahora!
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="img_box">
                                        <img src={imagen3} alt="" />
                                    </div>
                                    <div className="detail_box">
                                        <h6>
                                            Cuidado y aseo
                                        </h6>
                                        <p>
                                            Dale a tu mascota el aseo que se merece. En walking legs, ofrecemos baños y cortes de pelo de
                                            primera calidad. Haz que tu amigo peludo luzca y se sienta genial. ¡Reserva ahora!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={imagen4} alt="" className="w-100" />
                    </div>
                </div>
            </div>
        </section>

    )
}