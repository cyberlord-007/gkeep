import React,{useState} from 'react'
import {ModalWrapper,ModalOverlay,ModalHeader,ModalHeaderText,ModalFooter,ModalBody,TitleInput,InputField,DescInput} from './ModalStyles'
import { Button } from '../UiButton/ButtonStyles'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { createNote } from '../../actions/createNote'

const Modal = ({ open, onClose,mode, createNote}) => {

		const [inputData,setInputData] = useState({})

		const handleChange = (e) => {
			setInputData({
				...inputData,
				[e.target.name]: e.target.value
			})
		}

		const handleClose= (e) => {
			e.preventDefault()
			if(Object.entries(inputData).length === 0 && inputData.constructor === Object) {
				onClose()
			} else {
				createNote({...inputData})
				onClose()
				setInputData({})
			}
		}

    if(!open) return null

    return ReactDOM.createPortal(
        <>
        <ModalOverlay>
            <ModalWrapper mode={mode}>
                <ModalHeader>
                    <ModalHeaderText>
											Add Task...
                    </ModalHeaderText>
                </ModalHeader>
								<ModalBody>
									<InputField mode={mode}>Title</InputField>
									<TitleInput onChange={handleChange} mode={mode} name='title' type='text' required />
									<InputField mode={mode}>Description</InputField>
									<DescInput onChange={handleChange}  mode={mode} name='body' type='text' required />
								</ModalBody>
                <ModalFooter>
                    <Button onClick={handleClose} primary width={'100px'} marginB={'20px'}>CONFIRM</Button>
                    <Button secondary onClick={handleClose} marginL='15px' width={'100px'}>CLOSE
                    </Button>
                </ModalFooter>
            </ModalWrapper>
        </ModalOverlay>
        </>,
        document.getElementById('portal')
    )
}


const mapDispatchToProps = (dispatch) => {
	return {
		createNote: (note) => dispatch(createNote(note))
	}
}

export default connect(null,mapDispatchToProps)(Modal)
