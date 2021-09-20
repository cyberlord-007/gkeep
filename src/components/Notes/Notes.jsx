import React,{useState} from 'react'
import { connect } from 'react-redux'
import {pinNotes} from '../../actions/pinNotes'
import {archiveNotes} from '../../actions/archiveNote'
import {deleteNotes} from '../../actions/deleteNote'
import { NotesContainer,NotesWrapper,NotesCard,CardHeader,Actions,CardTitle,GreyLine,CardBody,NoteDesc,IconWrap} from './NoteStyles'
import { PageTitleRow,SectionTitle } from '../../global/PageStyles'
import Modal from '../Modal/Modal'
import {AiFillPushpin,AiOutlinePushpin} from 'react-icons/ai'
import {BiArchiveIn,BiNotepad} from 'react-icons/bi'
import {IoMdArchive} from 'react-icons/io'
import {FaTrash} from 'react-icons/fa'

const Notes = ({mode,notes,pinNotes,archiveNotes,deleteNotes}) => {


	const [isOpen,setIsOpen] = useState(false)
	const [clickedCard,setClickedCard] = useState({})

	const handlePinned = (noteDoc) => {
		const note = notes[noteDoc]
		pinNotes({noteDoc,note});
	}


	const handleArchived = (noteDoc) => {
		const note = notes[noteDoc]
		archiveNotes({noteDoc,note})
	}

	const handleClick = (note,noteDoc) => {
		setIsOpen(true)
		setClickedCard({
			noteData: {...note},
			noteDoc
		})
	}

	const handleDelete = (noteDoc) => {
		deleteNotes({noteDoc})
	}

	return (
		<>
			<NotesContainer mode={mode}>
				<PageTitleRow>
					<BiNotepad size='35' color={mode ? '#fff' : '#000'}/>
					<SectionTitle mode={mode}>Your Notes</SectionTitle>
				</PageTitleRow>
				<NotesWrapper>
					{
						notes && Object.keys(notes)?.map((noteDoc,idx) => (
							<>
							{notes[noteDoc]?.archived ? null:
								<NotesCard key={notes[noteDoc]?.title}>
									<CardHeader>
										<CardTitle>{notes[noteDoc]?.title}</CardTitle>
									</CardHeader>
									<GreyLine></GreyLine>
									<CardBody onClick={() => handleClick(notes[noteDoc],noteDoc)}>
										<NoteDesc mode={mode}>
											{notes[noteDoc]?.body}
										</NoteDesc>	
									</CardBody>
									<Actions>
										<IconWrap>
											{
												notes[noteDoc]?.pinned ? <AiFillPushpin onClick={()=>handlePinned(noteDoc)} size='25' /> : <AiOutlinePushpin onClick={()=>handlePinned(noteDoc)} size='25' />
											}
										</IconWrap>
										<IconWrap>
											{
												notes[noteDoc]?.archived ? <IoMdArchive onClick={()=> handleArchived(noteDoc)} size='25' />  : <BiArchiveIn onClick={() => handleArchived(noteDoc)} size='25' />
											}
										</IconWrap>
										<IconWrap>
											<FaTrash onClick={() => handleDelete(noteDoc)} size='23' />
										</IconWrap>
										</Actions>
								</NotesCard>
							}
							</>	
						))
					}
				</NotesWrapper>
			</NotesContainer>
			<Modal open={isOpen} onClose={() => setIsOpen(false)} mode={mode} type='edit' data={clickedCard}/>
		</>
	)
}



const mapDispatchToProps = (dispatch) => {
	return {
		pinNotes: (note) => dispatch(pinNotes(note)),
		archiveNotes: (note) => dispatch(archiveNotes(note)),
		deleteNotes: (note) => dispatch(deleteNotes(note))
	}
}

export default connect(null,mapDispatchToProps)(Notes)
