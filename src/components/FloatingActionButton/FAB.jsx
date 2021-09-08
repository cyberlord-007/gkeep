import React from 'react'
import {FaButton} from './FABStyles'
import {FaPlus} from 'react-icons/fa'

const FAB = ({mode}) => {
	return (
		<>
			<FaButton mode={mode}>
				<FaPlus />
			</FaButton>
		</>
	)
}

export default FAB
