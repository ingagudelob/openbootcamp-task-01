// Estylos a traves de constantes

import React from "react";
import { useState } from "react";

// ? Estylo para login
const loggedStyle = {
  color: "green",
  fontWeigth: "bold",
};

// ? Estylo para logout
const unLoggedStyle = {
  color: "red",
};

const GreetingStyle = (props) => {
  // Estado para el componente (Login - Logout)
  const [inLogin, setInLogin] = useState(false);

  return (
    <div style={inLogin ? loggedStyle : unLoggedStyle}>
      {inLogin ? <p>Hola, {props.name}</p> : <p>Loguearse por favor</p>}
      <button
        onClick={() => {
          setInLogin(!inLogin);
        }}
      >
        {inLogin ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default GreetingStyle;
