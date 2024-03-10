import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Info.css';
import '../../responsive.css';

export default function Info() {
    return(
        <section className="info_section layout_padding2">
            <div className="container">
            <div className="info_items">
                <a href="">
                    <div className="item">
                        <div className="img-box box-1">
                            <img src="" alt="" />
                        </div>
                        <div className="detail-box">
                            <p>Ubicacion</p>
                        </div>
                    </div>
                </a>
                <a href="">
                    <div className="item">
                        <div className="img-box box-2">
                            <img src="" alt="" />
                        </div>
                        <div className="detail-box">
                            <p>+57 3004567897</p>
                        </div>
                    </div>
                </a>
                <a href="">
                    <div className="item">
                        <div className="img-box box-3">
                            <img src="" alt="" />
                        </div>
                        <div className="detail-box">
                            <p>walkinglegs@gmail.com</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        </section>
    )
}