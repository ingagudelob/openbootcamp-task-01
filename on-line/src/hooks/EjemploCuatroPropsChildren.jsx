import React from "react";

const EjemploCuatro = (props) => {
  return (
    <div>
      <h1>*** Ejemplo de CHILDERN PROPS ***</h1>
      <h2>Nombre: {props.nombre}</h2>
      {/** props.children pintará por defecto aquello que se encuentre entre las etiquetas de apertuta
       * y cierre de este componente de orden superior
       */}
      {props.children}
    </div>
  );
};

export default EjemploCuatro;
