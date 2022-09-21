import React, { useEffect, useState } from "react";

const user = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 20,
};
const claves = Object.keys(user);
const valores = Object.values(user);
let i = 0;
const Ejercicio2 = () => {
  const [dato, setDato] = useState(valores[i]);
  const [nombre, setNombre] = useState(claves[i].toUpperCase());
  useEffect(() => {
    setInterval(() => {
      setDato(valores[i]);
      setNombre(claves[i].toUpperCase());
      console.log(i);
      i++;
      if (i === valores.length) i = 0;
    }, 2000);
  }, []);
  return (
    <>
    <hr />
      <h1>Pasar datos automáticamente</h1>
      <h2>
        {nombre}: {dato}
      </h2>
    </>
  );
};

export default Ejercicio2;
