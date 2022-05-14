import React from 'react';
import Card from '../Card/Card'
import s from './CardContainer.module.sass';

export default function CardContainer({ cards }) {

	return (
		<div className={s.card_container} >
			{cards.map(t => <Card key={t.id} {...t} />)}
		</div>
	)
}
