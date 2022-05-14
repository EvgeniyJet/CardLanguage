import React, { useContext } from 'react'
import Button from '../UI/Button/Button';
import Field from '../UI/Field/Field';
import s from './AddWord.module.sass'
import { Context } from '../../context';
export default function AddWord() {
	const { addCard } = useContext(Context);

	const submit = e => {
		const { en, ru } = e.target;
		e.preventDefault();
		addCard({
			id: Date.now(),
			en: en.value,
			ru: ru.value,
			state: "ru"
		});
	}

	return (
		<form onSubmit={submit} className={s.add_form}>
			<Field label={'На английском:'} name={'en'} />
			<Field label={'На русском:'} name={'ru'} />
			<Button>Добавить</Button>
		</form>
	)
}
