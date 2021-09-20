import React,{useState, useEffect} from 'react'
import {FaButton} from './FABStyles'
import Modal from '../Modal/Modal'
import {FaPlus} from 'react-icons/fa'

const FAB = ({mode}) => {

	const modalOpen = localStorage.getItem('isOpen') === 'true';
	const [isOpen,setIsOpen] = useState(modalOpen);
	console.log(typeof localStorage.getItem('isOpen'));

	useEffect(() => {
		localStorage.setItem('isOpen',isOpen);
	}, [isOpen])

	return (
		<>
			<FaButton onClick={() => {
				setIsOpen(true)
			}} mode={mode}>
				<FaPlus />
			</FaButton>
			<Modal open={isOpen} onClose={() => {
				setIsOpen(false)
			}} mode={mode} />
		</>
	)
}

export default FAB
