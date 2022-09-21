import React, { useEffect, useState } from "react";

const Estado = () => {
  const valorInicial = 0;
  const [contador, setContador] = useState(valorInicial);
  const aumentar = () => {
    setContador((prev) => prev + 1);
  };
  const disminuir = () => {
    setContador((prev) => prev - 1);
  };
  const resetear = () => {
    setContador(valorInicial);
  };

  useEffect(() => {
    console.log(`contador: ${contador}`);
  }, [contador]);

  return (
    <>
      <h1>Contador</h1>
      <h2>{contador}</h2>
      <button onClick={aumentar}>+1</button>
      <button onClick={disminuir}>-1</button>
      <button onClick={resetear}> Reset</button>
    </>
  );
};

export default Estado;
