import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './About.css';
import '../../responsive.css';
import imagen from '../../images/paseopng-fotor-bg-remover-20231030153644.png';
export default function About() {
    return( 
        <section className="about_section layout_padding">
            <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="img-box">
                        <img src={imagen} className="img-fluid" alt="Responsive image" />
                    </div>
                </div>
                <div className="col-md-6 my-1">
                    <div className="detail-box">
                        <h2 className="custom_heading">
                            Acerca de {''}
                            <span>
                                Nosotros
                            </span>
                        </h2>
                        <p>
                            Nuestro equipo de amantes de los animales está comprometido a brindar un paseo seguro, divertido y
                            saludable para tu mascota. Ya sea que necesites un paseo diario, atención especializada o una aventura en
                            grupo en el parque, estamos aquí para cubrir todas tus necesidades.
                        </p>

                        <p>
                            Explora nuestro sitio web para obtener más información sobre nuestros servicios, conocer a nuestro equipo
                            y descubrir lo que nuestros clientes satisfechos dicen sobre nosotros. Estamos ansiosos por conocerte a ti
                            y a tu querido amigo peludo. ¡Contáctanos hoy para programar su próximo paseo! Tu mascota merece lo mejor,
                            y eso es exactamente lo que ofrecemos. ¡Gracias por confiar en nosotros para el cuidado
                            de tus mascotas!
                        </p>
                    </div>
                </div>
            </div>
        </div>

        </section>
    )
}