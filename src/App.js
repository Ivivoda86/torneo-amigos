import React, { useState } from "react";
import Tabla from "./Tabla";
import "./App.css";

function App() {
  const jugadores = [
    { nombre: "Andy", goles: 2, partidosJugados: 10, puntos: 6 },
    { nombre: "Fausti", goles: 0, partidosJugados: 8, puntos: 2 },
  ];

  //const jugadores = ["Andy", "Fausti"];
  const [jugadorNuevo, setjugadorNuevo] = useState(jugadores);

  return (
    <div>
      <Tabla jugadorNuevo={jugadorNuevo} jugadores={jugadores}></Tabla>
      <button
        onClick={() => {
          setjugadorNuevo((jugadores) => {
            const jugadorNuevo = [...jugadores, {nombre:"Ian", goles: 30,partidosJugados: 10, puntos: 25 }];
            return jugadorNuevo;
          });
        }}
      >
        Agregar
      </button>
      
    </div>
  );
}

export default App;
