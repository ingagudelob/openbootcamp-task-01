import React, { useState } from "react";

const EjemploUnoState = () => {
  const userInicial = {
    nombre: "Jaime",
    apellido: "Agudelo",
  };

  const [contador, setContador] = useState(0);
  const [user, setUser] = useState(userInicial);

  const handleContador = () => {
    setContador(contador + 1);
  };

  const handleUser = () => {
    setUser({
      nombre: "Joshua",
      apellido: "Agudelo",
    });
  };

  return (
    <div>
      <h1>Uso del useSate</h1>
      <hr />
      <h1>
        Nombre: {user.nombre} {user.apellido}
      </h1>
      <h2>Contador: {contador}</h2>
      <button onClick={handleContador}>Incrementar Contador</button>
      <button onClick={handleUser}>Cambiar Nombre</button>
    </div>
  );
};

export default EjemploUnoState;
