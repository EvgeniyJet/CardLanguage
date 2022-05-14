import React from 'react'
import TestInnerComponents from '../TestInnerComponents/TestInnerComponents'

export default function TestComponents() {
	const style = {
		color: 'white',
		backgroundColor: 'green',
		padding: '10px'
	}



	return (
		<div>TestComponents
			<TestInnerComponents style={style} />
		</div>
	)
}
