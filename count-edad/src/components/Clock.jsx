import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Clock = () => {
  const inicial = {
    // Se genera una fecha como estado inicial del componente
    fecha: new Date(),
    edad: 0,
    nombre: "Abigail",
    apellidos: "Agudelo Plata",
  };

  const [user, setUser] = useState(inicial);

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  const tick = () => {
    setUser((prevState) => {
      let edad = prevState.edad + 1;
      return {
        ...prevState,
        fecha: new Date(),
        edad,
      };
    });
  };

  return (
    <div>
      <br />
      <h2>
        Hora Actual:
        {user.fecha.toLocaleTimeString()}
      </h2>
      <h3>
        {user.nombre} {user.apellidos}
      </h3>
      <h1>Edad: {user.edad}</h1>
    </div>
  );
};

export default Clock;
