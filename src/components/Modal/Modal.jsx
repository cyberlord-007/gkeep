import React,{useState,useEffect} from 'react'
import {ModalWrapper,ModalOverlay,ModalHeader,ModalHeaderText,ModalFooter,ModalBody,TitleInput,InputField,DescInput} from './ModalStyles'
import { Button } from '../UiButton/ButtonStyles'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { createNote } from '../../actions/createNote'
import { editNote } from '../../actions/editNote'

const Modal = ({ open,onClose,mode,createNote,editNotes,type,data}) => {


		const [title,setTitle] = useState()
		const [body,setBody] = useState()


		useEffect(() => {
			if(type === 'edit') {
				setTitle(data?.noteData?.title)
				setBody(data?.noteData?.body)
			}
		},[data])

		const handleTitleChange = (e) => {
			setTitle(e.target.value)
		}

		const handleBodyChange = (e) => {
			setBody(e.target.value)
		}

		const handleClose= (e) => {
			e.preventDefault()
			if(title === '' && body === '') {
				onClose()
			} else {
				const note = data?.noteData
				const noteDoc = data?.noteDoc
				type === 'edit' ? editNotes({note,noteDoc,title,body}) : createNote({title,body})
				onClose()
				setTitle('')
				setBody('')
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
									<TitleInput onChange={handleTitleChange} mode={mode} name='title' value={title}	 type='text' required />
									<InputField mode={mode}>Description</InputField>
									<DescInput onChange={handleBodyChange}  mode={mode} name='body' value={body} type='text' required />
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
		createNote: (note) => dispatch(createNote(note)),
		editNotes: (note) => dispatch(editNote(note))
	}
}

export default connect(null,mapDispatchToProps)(Modal)
