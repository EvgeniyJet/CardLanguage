import React, { useContext } from 'react';
import s from './Card.module.sass';
import { Context } from '../../context';
import CloseBtn from '../UI/CloseBtn/CloseBtn'
export default function Card({ id, ru, en, state }) {
	const { changeCardState, deleteCard } = useContext(Context);
	const style = {
		backgroundColor: (state === 'ru' ? '#9b59b6' : '#2ecc71')
	};
	return (
		<div className={s.card} style={style} onClick={() => changeCardState(id)}>
			<CloseBtn handler={() => deleteCard(id)} />
			{state == 'ru' ? ru : en}

		</div>
	)
}
