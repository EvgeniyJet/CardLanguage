import React from 'react'

export default function TestInnerComponents(props) {
	console.log('TestInnerComponrnts', props);
	return (
		<div {...props}>TestInnerComponents</div>
	)
}
