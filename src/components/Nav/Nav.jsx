import React, { useState, useContext } from 'react'
import AddWord from '../AddWord/AddWord';
import Button from '../UI/Button/Button'
import ModalWindow from '../UI/ModalWindow/ModalWindow';
import s from './Nav.module.sass'
import { Context } from '../../context';
export default function Nav() {
	const [modal, setModal] = useState(false);
	const closeModal = (() => setModal(() => false));

	const { changeLanguage } = useContext(Context);
	return (
		<nav className={s.navigation} >
			<Button onClick={() => setModal(() => true)}>Добавить</Button>
			<Button onClick={() => { changeLanguage('en') }}>Английский</Button>
			<Button onClick={() => { changeLanguage('ru') }}>Русский</Button>
			{modal &&
				<ModalWindow closeModal={closeModal} >
					<AddWord closeModal={closeModal} />
				</ModalWindow>}
		</nav>
	)
}
