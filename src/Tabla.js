import React from "react";

const Tabla = ({jugadorNuevo, jugadores}) => {
  return (
    <div>
      <table>
        <tr style={{ backgroundColor: "Green" }}>
          <td>Nombres</td>
          <td>Goles</td>
          <td>Partidos Jugados</td>
          <td>Puntos</td>
        </tr>

       
        {jugadores.map((caracteristicas)=>{
            
            return <tr>
                <td>{caracteristicas.nombre}</td>
                <td>{caracteristicas.goles}</td>
                <td>{caracteristicas.partidosJugados}</td>
                <td>{caracteristicas.puntos}</td>

                   </tr>
        
        }
        )
        }
      </table>
    </div>
  );
};

export default Tabla;
