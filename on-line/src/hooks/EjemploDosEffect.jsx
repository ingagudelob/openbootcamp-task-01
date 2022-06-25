/**
 * * Ejemplo de uso de:
 * ? useState
 * ? useRef
 * ? useEffect
 */

import React, { useState, useEffect, useRef } from "react";

const EjemploDosEffect = () => {
  const [cont1, setCont1] = useState(0);
  const [cont2, setCont2] = useState(0);

  //* Creamos una referencia con useRef() para asociar una variable
  //* con un elemento del DOM del componente

  const miRef = useRef();

  const incrementarUno = () => {
    setCont1(cont1 + 1);
  };

  const incrementarDos = () => {
    setCont2(cont2 + 1);
  };

  const handleCero = () => {
    setCont1(0);
    setCont2(0);
  };

  /**
   * ? Caso 1: Ejecutar SIEMPRE un snippet de codigo
   * cada vez que haya un cambio en el estado del componente
   * se ejecuta aquello que esté dentro del useEffect()
   */

  //   useEffect(() => {
  //     console.log("CAMBIO DEL ESTADO DEL COMPONENTE");
  //     console.log("Mostrando Referencia a elemento del DOM");
  //     console.log(miRef);
  //   });

  /**
   * ? Caso 2: Ejecutar SOLO CUANDO CAMBIE EL CONT 1
   * cada vez que haya un cambio en el Cont 1 del componente
   * se ejecuta aquello que esté dentro del useEffect()
   */

  //   useEffect(() => {
  //     console.log("CAMBIO DEL ESTADO DEL CONTADOR 1");
  //     console.log("Mostrando Referencia a elemento del DOM");
  //     console.log(miRef);
  //   }, [cont1]);

  /**
   * ? Caso 3: Ejecutar SOLO CUANDO CAMBIE EL CONT 1 Ó EL CONT 2
   * cada vez que haya un cambio en el Cont 1 ó el cont 2 del componente
   * se ejecuta aquello que esté dentro del useEffect()
   */

  useEffect(() => {
    console.log("CAMBIO DEL ESTADO DEL CONTADOR 1 Ó CONTADOR 2");
    console.log("Mostrando Referencia a elemento del DOM");
    console.log(miRef);
  }, [cont1, cont2]);

  return (
    <div>
      <h1>Uso del useState(), useEffect() y useRef()</h1>
      <h2>CONTADOR 1: {cont1}</h2>
      <h2>CONTADOR 2: {cont2}</h2>
      {/*  ELEMENTO REFERENCIADO */}
      <h4 ref={miRef}>Ejemplo de elemento referenciado</h4>
      <button style={{ margin: "15px" }} onClick={incrementarUno}>
        Incrementar Cont 1
      </button>
      <button style={{ margin: "15px" }} onClick={incrementarDos}>
        Incrementar Cont 2
      </button>
      <button style={{ margin: "15px" }} onClick={handleCero}>
        Reset Contadores
      </button>
    </div>
  );
};

export default EjemploDosEffect;
