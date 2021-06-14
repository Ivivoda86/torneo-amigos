import React from 'react'

const Formulario = ({ inputs, onSubmit, tituloBoton }) => {
	return (
		<form
			onSubmit={(evento) => {
				evento.preventDefault()
				if (onSubmit) {
					onSubmit(evento)
				}
			}}
		>
			{inputs?.map((item) => {
				return <input key={item.name} placeholder={item.placeholder} name={item.name} />
			})}
			<button type={'submit'}>{tituloBoton}</button>
		</form>
	)
}

export default Formulario
