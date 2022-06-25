/**
 * * Ejemplo de uso de:
 * ? useState
 * ? useContext
 */

import React, { createContext, useContext, useState } from "react";

//* Creacion del contexto que va a llenar con los datos del padre
const miContexto = createContext(null);

const ComponenteUno = () => {
  const state = useContext(miContexto);
  return (
    <div>
      <h1>El Token es: {state.token}</h1>
      {/** Pintamos componente 2 */}
      <ComponenteDos />
    </div>
  );
};

const ComponenteDos = () => {
  const state = useContext(miContexto);
  return (
    <div>
      <h2>La sesión es: {state.sesion}</h2>
    </div>
  );
};

export const ComponenteConContexto = () => {
  const stateInicial = {
    token: "12345",
    sesion: 1,
  };

  // Creamos el estado del componente
  const [sessionData, setSessionData] = useState(stateInicial);

  const actualizarSession = () => {
    setSessionData({
      token: "JUWT123654",
      sesion: sessionData.sesion + 1,
    });
  };
  return (
    <miContexto.Provider value={sessionData}>
      {/* Todo lo que está aca adentro puede leer o actualizar los datos*/}
      <h1>Uso del useState() y useContext()</h1>
      <ComponenteUno />
      <button onClick={actualizarSession}>Actualizar datos</button>
    </miContexto.Provider>
  );
};
