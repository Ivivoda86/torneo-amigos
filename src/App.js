import React, { useState } from "react";
import Tabla from "./Tabla";
import "./App.css";
import Formulario from "./Formulario";

function App() {
  const columnas = [
    { id: "nombre", titulo: "Nombre" },
    { id: "goles", titulo: "Goles" },
    { id: "partidosJugados", titulo: "Partidos Jugados" },
    { id: "puntos", titulo: "Puntos" },
    { id: "tardes", titulo: "Tardes" },
    { id: "faltasSinAviso", titulo: "Faltas sin aviso" },
    { id: "porcentaje", titulo: "% de asistencia" },
  ];

  const [jugadores, setJugadores] = useState([
    { nombre: "Andy", goles: 2, partidosJugados: 11, puntos: 19, tardes: 0, faltasSinAviso: 0, porcentajeAsistencia: "%90" },
    { nombre: "Fausti", goles: 0, partidosJugados: 9, puntos: 21 , tardes: 0, faltasSinAviso: 0, porcentajeAsistencia: "%90" },
    { nombre: "Hernan", goles: 2, partidosJugados: 14, puntos: 31 , tardes: 0, faltasSinAviso: 0, porcentajeAsistencia: "%90" },
    { nombre: "Facu", goles: 2, partidosJugados: 14, puntos: 30 , tardes: 0, faltasSinAviso: 0, porcentajeAsistencia: "%90" },
    { nombre: "Mainen", goles: 2, partidosJugados: 12, puntos: 26 , tardes: 0, faltasSinAviso: 0, porcentajeAsistencia: "%90" },
    { nombre: "Nano", goles: 2, partidosJugados: 13, puntos: 25 , tardes: 0, faltasSinAviso: 0, porcentajeAsistencia: "%90" },
    { nombre: "Nacho", goles: 2, partidosJugados: 12, puntos: 22 , tardes: 0, faltasSinAviso: 0, porcentajeAsistencia: "%90" },
    { nombre: "Todi", goles: 2, partidosJugados: 14, puntos: 18 , tardes: 0, faltasSinAviso: 0, porcentajeAsistencia: "%90" },
    { nombre: "Fabri", goles: 2, partidosJugados: 9, puntos: 17 , tardes: 0, faltasSinAviso: 0, porcentajeAsistencia: "%90" },
    { nombre: "Niqueador", goles: 2, partidosJugados: 9, puntos: 15 , tardes: 0, faltasSinAviso: 0, porcentajeAsistencia: "%90" },
    { nombre: "Santino", goles: 2, partidosJugados: 6, puntos: 12 , tardes: 0, faltasSinAviso: 0, porcentajeAsistencia: "%90" },
    { nombre: "Villa", goles: 2, partidosJugados: 10, puntos: 12 , tardes: 0, faltasSinAviso: 0, porcentajeAsistencia: "%90" },
    { nombre: "Tallo", goles: 2, partidosJugados: 8, puntos: 14 , tardes: 0, faltasSinAviso: 0, porcentajeAsistencia: "%90" },
    { nombre: "Pacha", goles: 2, partidosJugados: 4, puntos: 6 , tardes: 0, faltasSinAviso: 0, porcentajeAsistencia: "%90" },
    { nombre: "Chusti", goles: 2, partidosJugados: 5, puntos: 5 , tardes: 0, faltasSinAviso: 0, porcentajeAsistencia: "%90" },
    { nombre: "Toby", goles: 2, partidosJugados: 2, puntos: 4 , tardes: 0, faltasSinAviso: 0, porcentajeAsistencia: "%90" },
    { nombre: "Choe", goles: 2, partidosJugados: 2, puntos: 4 , tardes: 0, faltasSinAviso: 0, porcentajeAsistencia: "%90" },
    { nombre: "Pollo", goles: 2, partidosJugados: 2, puntos: 2 , tardes: 0, faltasSinAviso: 0, porcentajeAsistencia: "%90" },
  ]);

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "50%" }}>
        <Tabla jugadores={jugadores} columnas={columnas}></Tabla>
      </div>
      <div style={{ width: "50%" }}>
        <Formulario
          inputs={[
            { placeholder: "Nombre", name: "nombre" },
            { placeholder: "Goles", name: "goles" },
            { placeholder: "Partidos jugados", name: "partidosJugados" },
            { placeholder: "Puntos", name: "puntos" },
            { placeholder: "Tardes", name: "tardes" },
            { placeholder: "Faltas Sin Aviso", name: "faltasSinAviso" },
            { placeholder: "Porcentaje De Asistencia", name: "porcentajeAsistencia" },
          ]}
          tituloBoton={"Confirmar"}
          onSubmit={(evento) => {
            const data = {
              nombre: evento.target[0].value,
              goles: evento.target[1].value,
              partidosJugados: evento.target[2].value,
              puntos: evento.target[3].value,
              tardes: evento.target[4].value,
              faltasSinAviso: evento.target[5].value,
              porcentajeAsistencia: evento.target[6].value,

            };
            if (!data.nombre) {
              alert("Nombre obligatorio");
              return;
            }
            setJugadores((actual) => {
              const existe = actual.find((item) => item.nombre === data.nombre);
              if (existe) {
                existe.partidosJugados = data.partidosJugados;
                return actual;
              }
              return [...actual, data];
            });
          }}
        />
       
      </div>
    </div>
  );
}

export default App;
