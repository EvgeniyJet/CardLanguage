import React from 'react';
import s from './CloseBtn.module.sass';

export default function CloseBtn({ handler }) {


	return (
		<button className={s.close_btn} onClick={handler}>
			X
		</button>
	)
}
