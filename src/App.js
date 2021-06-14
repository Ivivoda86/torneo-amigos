import React, { useState } from 'react'
import Tabla from './Tabla'
import './App.css'
import Formulario from './Formulario'

function App() {
	const [jugadores, setJugadores] = useState([
		// { nombre: 'Andy', goles: 2, partidosJugados: 10, puntos: 6 },
		// { nombre: 'Fausti', goles: 0, partidosJugados: 8, puntos: 2 },
	])

	return (
		<div style={{ display: 'flex' }}>
			<div style={{ width: '50%' }}>
				<Tabla jugadores={jugadores}></Tabla>
			</div>
			<div style={{ width: '50%' }}>
				<Formulario
					inputs={[
						{ placeholder: 'Nombre', name: 'nombre' },
						{ placeholder: 'Goles', name: 'goles' },
						{ placeholder: 'Partidos jugados', name: 'partidosJugados' },
						{ placeholder: 'Puntos', name: 'puntos' },
					]}
					tituloBoton={'Confirmar'}
					onSubmit={(evento) => {
						const data = {
							nombre: evento.target[0].value,
							goles: evento.target[1].value,
							partidosJugados: evento.target[2].value,
							puntos: evento.target[3].value,
						}
						if (!data.nombre) {
							alert('Nombre obligatorio')
							return
						}
						setJugadores((actual) => {
							const existe = actual.find((item) => item.nombre === data.nombre)
							if (existe) {
								existe.partidosJugados = data.partidosJugados
								return actual
							}
							return [...actual, data]
						})
					}}
				/>
				<Formulario inputs={[{ placeholder: 'HOLA', name: 'hola' }]} tituloBoton={'Cagon'} />
			</div>
		</div>
	)
}

export default App
