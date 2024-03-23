import React from "react";
import NavUser from "../../components/Navbar/NavUser";
import Footer from "../../components/Footer/Footer";
import Info from "../../components/Info/Info";
import Form from "../../components/Form/Form";
import Paseos from "../../components/Paseos/Paseos";
export default function Usuario() {
    return (
        <>
        <NavUser/>
        <Paseos/>
        <Info/>
        <Footer/>
        </>
    )
}