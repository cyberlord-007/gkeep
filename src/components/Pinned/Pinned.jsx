import React,{useState,useEffect} from 'react'
import { NotesContainer,NotesWrapper,NotesCard,CardHeader,Actions,CardTitle,GreyLine,CardBody,NoteDesc,IconWrap} from '../Notes/NoteStyles'
import {BiArchiveIn} from 'react-icons/bi'
import {IoMdArchive} from 'react-icons/io'
import {FaExclamationCircle} from 'react-icons/fa'
import {connect} from 'react-redux'
import {compose} from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { archiveNotes } from '../../actions/archiveNote'
import { deleteNotes } from '../../actions/deleteNote'
import { pinNotes } from '../../actions/pinNotes'
import {AiOutlinePushpin,AiFillPushpin} from 'react-icons/ai'
import { FaTrash } from 'react-icons/fa'
import { PageTitleRow,SectionTitle,PageError,ErrorText} from '../../global/PageStyles'
import Modal from '../Modal/Modal'


const Pinned = ({mode,notes,queriedNotes=null,pinNotes,archiveNotes,deleteNotes}) => {


	const [isOpen,setIsOpen] = useState(false)


	const [_notes, setNotes] = useState(notes)
	const [pinnedNotes,setPinnedNotes] = useState(null)
	const [clickedCard,setClickedCard] = useState({})

	useEffect(()=>{
		if(queriedNotes){
			setNotes(queriedNotes)
		} else {
			setNotes(notes)
		}
		
	},[notes,queriedNotes])

	useEffect(() => {
		_notes && setPinnedNotes(Object.fromEntries(Object.entries(_notes).filter(([noteDoc,note]) => note?.pinned === true && note?.archived === false)))
	},[_notes])

	const handleArchived = (noteDoc) => {
		const note = notes[noteDoc]
		archiveNotes({noteDoc,note})
	}

	const handlePinned = (noteDoc) => {
		const note = notes[noteDoc]
		pinNotes({noteDoc,note});
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
				{
					pinnedNotes && Object.keys(pinnedNotes).length > 0 && 
					<PageTitleRow>
						<AiOutlinePushpin size='35' color={mode ? '#fff' : '#000'}/>
						<SectionTitle mode={mode}>Pinned</SectionTitle>
					</PageTitleRow> 
				}
			
				<NotesWrapper>
					{
						pinnedNotes && Object.keys(pinnedNotes).length === 0 ?
						<PageError>
							<FaExclamationCircle size={window.screen.width < 480 ? '25' : '40'} color={mode ? '#dad6d6' : '#7c7979'} />
							<ErrorText mode={mode}>No pinned notes found</ErrorText>
						</PageError> :
						pinnedNotes && Object.entries(pinnedNotes).map(([noteDoc,note],idx) => (
							<NotesCard show={note} key={note?.title}>
								<CardHeader>
									<CardTitle>{note?.title}</CardTitle>
								</CardHeader>
								<GreyLine></GreyLine>
								<CardBody onClick={() => handleClick(note,noteDoc)}>
									<NoteDesc mode={mode}>
										{note?.body}
									</NoteDesc>
								</CardBody>
								<Actions>
									<IconWrap mode={mode}>
										{note?.pinned ? <AiFillPushpin onClick={() => handlePinned(noteDoc)} size='25' /> : <AiOutlinePushpin onClick={() => handlePinned(noteDoc)} size='25' />}
									</IconWrap>
									<IconWrap mode={mode}>
										{note?.archived ? <IoMdArchive onClick={() => handleArchived(noteDoc)} size='25' />  : <BiArchiveIn onClick={() => handleArchived(noteDoc)} size='25' />}
									</IconWrap>
									<IconWrap mode={mode}>
											<FaTrash size='23' onClick={() => handleDelete(noteDoc)} />
									</IconWrap>
									</Actions>
							</NotesCard>
						)) 
					}
				</NotesWrapper>
			</NotesContainer>
			<Modal open={isOpen} onClose={() => setIsOpen(false)} mode={mode} type='edit' data={clickedCard}/>
		</>
	)
}

const mapStateToProps = (state) => {
	console.log('state..',state)
	return {
		notes: state.firestore.data.notes
	}
}


const mapDispatchToProps = (dispatch) => {
	return {
		pinNotes: (note) => dispatch(pinNotes(note)),
		archiveNotes: (note) => dispatch(archiveNotes(note)),
		deleteNotes: (note) => dispatch(deleteNotes(note))
	}
}

export default compose(connect(mapStateToProps,mapDispatchToProps),firestoreConnect([
	{collection: 'notes',orderBy: ['createdAt','asc']}
]))(Pinned)
