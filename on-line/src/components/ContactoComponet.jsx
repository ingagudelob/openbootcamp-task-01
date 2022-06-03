import React from "react";
import PropTypes from "prop-types";
import { Contacto } from "../models/classContacto";
import ContactoPure from "../pures/ContactoPure";

const ContactoComponet = () => {
  const defaultContacto = new Contacto(
    "Jaime",
    "Agudelo",
    "ingenieroagudelo@gmail.com",
    false
  );

  return (
    <div>
      <h1>Contacto On Line</h1>
      <ContactoPure contacto={defaultContacto} />
    </div>
  );
};

ContactoComponet.propTypes = {
  contacto: PropTypes.instanceOf(Contacto),
};

export default ContactoComponet;
