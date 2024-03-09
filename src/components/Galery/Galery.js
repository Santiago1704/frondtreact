import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Galery.css';

export default function Galery() {
    return (
        <section className="gallery-section layout_padding">
            <div className="container">
                <a name="galeria">
                    <h2>Nuestra galeria</h2>
                </a>
                <div className="container">
                    <div className="img_box box-1">
                        <img src="images/g-1.png" alt="" />
                    </div>
                    <div className="img_box box-2">
                        <img src="images/g-2.png" alt="" />
                    </div>
                    <div className="img_box box-3">
                        <img src="images/g-3.png" alt="" />
                    </div>
                    <div className="img_box box-4">
                        <img src="images/paseador-de-perros_e0adb6d8_3.jpg" alt="" />
                    </div>
                    <div className="img_box box-5">
                        <img src="images/g-5.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}