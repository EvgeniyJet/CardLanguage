import React from 'react'
import s from './ModalWindow.module.sass'
export default function ModalWindow({ closeModal, children }) {
	return (
		<div className={s.container}
			onClick={closeModal}
			onSubmit={closeModal}>
			<div
				onClick={e => e.stopPropagation()}
				className={s.modal}
			>
				{children}
			</div>
		</div>
	)
}
