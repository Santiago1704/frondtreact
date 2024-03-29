import React from "react";
import NavUser from "../../components/Navbar/NavUser";
import Footer from "../../components/Footer/Footer";
import Info from "../../components/Info/Info";
import Paseos from "../../components/Paseos/Paseos";
import Chatbot from "../../components/Chatbot/Chatbot";
export default function Usuario() {
    return (
        <>
        <NavUser/>
        <Paseos/>
        <Chatbot/>
        <Info/>
        <Footer/>
        </>
    )
}