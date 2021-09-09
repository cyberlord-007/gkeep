import React from 'react'
import {ModalWrapper,ModalOverlay,ModalHeader,ModalHeaderText,ModalFooter,ModalBody,TitleInput} from './ModalStyles'
import { Button } from '../UiButton/ButtonStyles'
import ReactDOM from 'react-dom'

const Modal = ({ open, onClose}) => {
    if(!open) return null

    return ReactDOM.createPortal(
        <>
        <ModalOverlay>
            <ModalWrapper>
                <ModalHeader>
                    <ModalHeaderText>

                    </ModalHeaderText>
                </ModalHeader>
								<ModalBody>
									<TitleInput name='title' />
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
