import React from "react";
import PropTypes from "prop-types";
import EjemploCuatro from "../hooks/EjemploCuatroPropsChildren";
import ContactoPure from "../pures/ContactoPure";
import { ComponenteConContexto } from "../hooks/EjemploTresContext";
import { Contacto } from "../models/classContacto";
import "../styles/contactPure.scss";
import GreetingStyle from "../pures/greetingStyle";
import Clock from "../components/Ejercicio456";
import ClockClass from "./ClockClass";

const ContactoComponet = () => {
  const defaultContacto = new Contacto(
    "Jaime",
    "Agudelo",
    "ingenieroagudelo@gmail.com",
    true
  );

  return (
    <div>
      <h1>Contacto On Line</h1>
      <ContactoPure contacto={defaultContacto} />
      <hr />
      <ComponenteConContexto />
      <EjemploCuatro nombre="Jaime Agudelo">
        {/** Todo lo que este en este espacio es tratado como props.children */}
        <h3>+++ Conteido del children +++</h3>
        <GreetingStyle name="Joshua Agudelo" />
        <Clock />
        <ClockClass />
      </EjemploCuatro>
    </div>
  );
};

ContactoComponet.propTypes = {
  contacto: PropTypes.instanceOf(Contacto),
};

export default ContactoComponet;
