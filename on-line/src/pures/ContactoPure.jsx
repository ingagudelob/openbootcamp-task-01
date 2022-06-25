import React from "react";
import "../styles/contactPure.scss";

const ContactoPure = ({ contacto }) => {
  return (
    <div>
      <h1 className="contact-name">{`Nombre: ${contacto.nombre} ${contacto.apellido}`}</h1>
      <h2>{`Email: ${contacto.email}`}</h2>
      <h1>
        {contacto.conectado === true ? (
          <p style={{ color: "green" }}>Contacto En Linea</p>
        ) : (
          <p style={{ color: "red" }}>Contacto No Disponible</p>
        )}
      </h1>
    </div>
  );
};

export default ContactoPure;
