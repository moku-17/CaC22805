import React, { useState } from "react";

const Ejercicio4 = () => {
  let tareas = [];
  const [form, setForm] = useState({
    id: "",
    hecho: false,
    nombreTarea: "",
    descripcionTarea: "",
  });
  const [id, setId] = useState(0);
  const [lista, setLista] = useState(tareas);

  const handleCambiar = (e) => {
    console.log(e.target.name);
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setId((prev) => prev + 1);

    setLista((prevLista) => [
      ...prevLista,
      {
        id: id,
        hecho: form["hecho"],
        tarea: form["nombreTarea"],
        descripcion: form["descripcionTarea"],
      },
    ]);
    setForm({
      hecho: false,
      nombreTarea: "",
      descripcionTarea: "",
    });
  };

  const handleFinalizar = (id, checked) => {
    let nuevaLista = lista.slice();
    const index = lista.findIndex(
      (tarea) => parseInt(tarea.id) === parseInt(id)
    );
    nuevaLista[index].hecho = !checked;
    setLista(nuevaLista);
    console.log(lista);
  };

  const handleEliminar = (id) => {
    const nuevaLista = lista.filter((tarea) => tarea.id !== id);
    setLista(nuevaLista);
    console.log(lista);
  };

  const listaTareas = lista.map((tarea) => (
    <tr key={tarea.id}>
      <td>
        <input
          type="checkbox"
          checked={tarea.hecho}
          name={tarea.id}
          id={tarea.id}
          onChange={() => handleFinalizar(tarea.id, tarea.hecho)}
        />
      </td>

      <td style={{ textDecoration: tarea.hecho ? "line-through" : "none" }}>
        <strong>{tarea.tarea}</strong>
        <br /> {tarea.descripcion}
      </td>
      <td>
        <button onClick={() => handleEliminar(tarea.id)}>x</button>
      </td>
    </tr>
  ));

  return (
    <div>
      <h1>ToDo List</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombreTarea">Tarea: </label>
        <br />
        <input
          type="text"
          name="nombreTarea"
          onChange={handleCambiar}
          value={form.nombreTarea}
          required
        />
        <br />
        <label htmlFor="descripcionTarea">Descripción: </label>
        <br />
        <input
          type="text"
          name="descripcionTarea"
          onChange={handleCambiar}
          value={form.descripcionTarea}
          required
        />
        <br />
        <button type="submit">Agregar</button>
      </form>
      <hr />
      <h2>Lista de tareas</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th width={"300"}></th>
            <th></th>
          </tr>
        </thead>
        <tbody>{listaTareas}</tbody>
      </table>
    </div>
  );
};

export default Ejercicio4;
