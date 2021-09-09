import React from 'react'
import {ModalWrapper,ModalOverlay,ModalHeader,ModalHeaderText,ModalFooter,ModalBody,TitleInput,InputField,DescInput} from './ModalStyles'
import { Button } from '../UiButton/ButtonStyles'
import ReactDOM from 'react-dom'

const Modal = ({ open, onClose,mode}) => {
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
									<TitleInput mode={mode} name='title' />
									<InputField mode={mode}>Description</InputField>
									<DescInput  mode={mode} name='body' />
								</ModalBody>
                <ModalFooter>
                    <Button onClick={onClose} primary width={'100px'} marginB={'20px'}>CONFIRM</Button>
                    <Button secondary onClick={onClose} marginL='15px' width={'100px'}>CLOSE
                    </Button>
                </ModalFooter>
            </ModalWrapper>
        </ModalOverlay>
        </>,
        document.getElementById('portal')
    )
}

export default Modal
