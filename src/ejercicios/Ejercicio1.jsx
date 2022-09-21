import React, { useState } from "react";

const user = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 20,
};
const claves = Object.keys(user);
const valores = Object.values(user);
let i = 0;

const Ejercicio1 = () => {
  const [dato, setDato] = useState(valores[i]);
  const [nombre, setNombre] = useState(claves[i]);
  const cambiarDato = () => {
    i++;
    if (i === valores.length) i = 0;
    setDato(valores[i]);
    setNombre(claves[i])
    console.log(valores);
    console.log(i);
  };
  return (
    <>
      <h1>Pasar datos con botón</h1>
      <h2>{nombre}: {dato}</h2>
      <button onClick={cambiarDato}>Cambiar dato</button>
    </>
  );
};

export default Ejercicio1;
