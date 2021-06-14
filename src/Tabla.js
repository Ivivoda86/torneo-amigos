import React from 'react'

const Tabla = ({ jugadores }) => {
	return (
		<div>
			<table>
				<tbody>
					<tr style={{ backgroundColor: jugadores.length > 0 ? 'green' : 'yellow' }}>
						<td>Nombres</td>
						<td>Goles</td>
						<td>Partidos Jugados</td>
						<td>Puntos</td>
					</tr>
					{jugadores.map((caracteristicas) => {
						return (
							<tr key={caracteristicas.nombre}>
								<td>{caracteristicas.nombre}</td>
								<td>{caracteristicas.goles}</td>
								<td>{caracteristicas.partidosJugados}</td>
								<td>{caracteristicas.puntos}</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}

export default Tabla
