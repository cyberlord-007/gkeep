import React,{useState} from 'react'
import {FaButton} from './FABStyles'
import Modal from '../Modal/Modal'
import {FaPlus} from 'react-icons/fa'

const FAB = ({mode}) => {

	const [isOpen,setIsOpen] = useState(false)

	return (
		<>
			<FaButton onClick={() => setIsOpen(true)} mode={mode}>
				<FaPlus />
			</FaButton>
			<Modal open={isOpen} onClose={() => setIsOpen(false)} />
		</>
	)
}

export default FAB
