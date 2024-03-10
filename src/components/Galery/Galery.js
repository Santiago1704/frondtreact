import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Galery.css';
import '../../responsive.css';
import imagen1 from '../../images/g-1.png';
import imagen2 from '../../images/g-2.png';
import imagen3 from '../../images/g-3.png';
import imagen4 from '../../images/paseador-de-perros_e0adb6d8_3.jpg';
import imagen5 from '../../images/g-5.png';

export default function Galery() {
    return (
        <section className="gallery-section layout_padding">
            <div className="container">
                <a name="galeria">
                    <h2>Nuestra galeria</h2>
                </a>
                <div className="container">
                    <div className="img_box box-1">
                        <img src={imagen1} alt="" />
                    </div>
                    <div className="img_box box-2">
                        <img src={imagen2} alt="" />
                    </div>
                    <div className="img_box box-3">
                        <img src={imagen3} alt="" />
                    </div>
                    <div className="img_box box-4">
                        <img src={imagen4} alt="" />
                    </div>
                    <div className="img_box box-5">
                        <img src={imagen5} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}