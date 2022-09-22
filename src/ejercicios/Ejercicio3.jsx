import React, { useState } from "react";

const opciones = ["piedra", "papel", "tijera"];

const Ejercicio3 = () => {
  const [jugador, setJugador] = useState("?");
  const [maquina, setMaquina] = useState("?");
  const [resultado, setResultado] = useState("?");
  let i = 0;
  const elegirOpcion = (valor) => {
    setJugador(opciones[valor]);
    i = Math.floor(Math.random() * 3);
    setMaquina(opciones[i]);
    if (i === 0 && valor === 2) setResultado("Perdiste :(");
    if (i === 2 && valor === 0) setResultado("¡Ganaste!");
    else {
      if (i === valor) setResultado("¡Empate! :P");
      if (i === valor + 1) setResultado("Perdiste :(");
      if (i === valor - 1) setResultado("¡Ganaste! :D");
    }
  };

  return (
    <>
      <hr />
      <h1>Piedra, papel o tijera</h1>
      <div>
        <p>Elegí:</p>
        <button onClick={() => elegirOpcion(0)}>PIEDRA</button> &nbsp;
        <button onClick={() => elegirOpcion(1)}>PAPEL</button> &nbsp;
        <button onClick={() => elegirOpcion(2)}>TIJERA</button>
      </div>
      <div>
        <p>
          Tu elección: <strong>{jugador}</strong>
        </p>
        <p>
          Elección de la máquina: <strong>{maquina}</strong>
        </p>
        <p>
          Resultado: <strong>{resultado}</strong>
        </p>
      </div>
    </>
  );
};

export default Ejercicio3;
