import React from "react";

const Tabla = ({ jugadores, columnas }) => {
  jugadores.sort((a, b) => b.puntos - a.puntos)
  return (
    
    <div>
      <table>
        <tbody>
          <tr
            style={{
              backgroundColor: jugadores?.length > 3 ? "orange" : "yellow",
            }}
          >
            
            {columnas.map((item) => {
              return <td>{item.titulo}</td>;
            })}
          </tr>

          {jugadores.map((caracteristicas) => {
            return (
              <tr
                key={caracteristicas.nombre}
                style={{
                  backgroundColor:
                    caracteristicas.puntos > 16
                      ? "green"
                      : caracteristicas.puntos > 4
                      ? "red"
                      : "gray",
                }}
              >
                <td>{caracteristicas.nombre}</td>
                <td>{caracteristicas.goles}</td>
                <td>{caracteristicas.partidosJugados}</td>
                <td>{caracteristicas.puntos}</td>
                <td>{caracteristicas.tarde}</td>
                <td>{caracteristicas.faltasSinAviso}</td>
                <td>{caracteristicas.porcentajeAsistencia}</td>
              </tr>
            );
          })}
          <button>+1</button>
        </tbody>
      </table>
    </div>
  );
};

export default Tabla;
