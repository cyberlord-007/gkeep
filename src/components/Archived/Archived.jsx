import React,{useState,useEffect} from 'react'
import { archiveNotes } from '../../actions/archiveNote'
import { deleteNotes } from '../../actions/deleteNote'
import { NotesContainer,NotesWrapper,NotesCard,CardHeader,Actions,CardTitle,GreyLine,CardBody,NoteDesc,IconWrap} from '../Notes/NoteStyles'
import {BiArchiveIn} from 'react-icons/bi'
import {IoMdArchive} from 'react-icons/io'
import {FaExclamationCircle} from 'react-icons/fa'
import {connect} from 'react-redux'
import {compose} from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import {AiOutlinePushpin} from 'react-icons/ai'
import { FaTrash } from 'react-icons/fa'
import { PageTitleRow,SectionTitle,PageError,ErrorText} from '../../global/PageStyles'



const Archived = ({mode,notes,archiveNotes,deleteNotes,queriedNotes=null}) => {


	const [_notes, setNotes] = useState(notes)
	const [archivedNotes,setArchivedNotes] = useState([])
	
	

	useEffect(() => {
		notes && setArchivedNotes(Object.fromEntries(Object.entries(notes).filter(([noteDoc,note])=>note?.archived===true)))
	},[notes])

	const handleArchived = (noteDoc) => {
		const note = notes[noteDoc]
		archiveNotes({noteDoc,note})
	}

	const handleDelete = (noteDoc) => {
		deleteNotes({noteDoc})
	}

	return (
		<>
			<NotesContainer mode={mode}>
				{
					archiveNotes?.length > 0 && 
					<PageTitleRow>
						<IoMdArchive size='35' color={mode ? '#fff' : '#000'}/>
						<SectionTitle mode={mode}>Archived</SectionTitle>
					</PageTitleRow> 
				}
			
				<NotesWrapper>
					{
						Object.values(archivedNotes).length === 0 ?
						<PageError>
							<FaExclamationCircle size={window.screen.width < 480 ? '25' : '40'} color={mode ? '#dad6d6' : '#7c7979'} />
							<ErrorText mode={mode}>No archived notes found</ErrorText>
						</PageError> :
						Object.keys(archivedNotes).map((noteDoc) => (
							<NotesCard show={archivedNotes[noteDoc]} key={archivedNotes[noteDoc]?.title}>
								<CardHeader>
									<CardTitle>{archivedNotes[noteDoc]?.title}</CardTitle>
								</CardHeader>
								<GreyLine></GreyLine>
								<CardBody>
									<NoteDesc mode={mode}>
										{archivedNotes[noteDoc]?.body}
									</NoteDesc>
								</CardBody>
								<Actions>
									<IconWrap mode={mode}>
										{archivedNotes[noteDoc]?.archived ? <IoMdArchive onClick={() => handleArchived(noteDoc)} size='25' />  : <BiArchiveIn onClick={() => handleArchived(noteDoc)} size='25' />}
									</IconWrap>
									<IconWrap mode={mode}>
											<FaTrash onClick={() => handleDelete(noteDoc)} size='23' />
									</IconWrap>
								</Actions>
							</NotesCard>
						))
					}
				</NotesWrapper>
			</NotesContainer>
		</>
	)
}

// const mapStateToProps = (state) => {
// 	console.log('state..',state)
// 	return {
// 		notes: state.firestore.data.notes
// 	}
// }

const mapDispatchToProps = (dispatch) => {
	return {
		archiveNotes: (note) => dispatch(archiveNotes(note)),
		deleteNotes: (note) => dispatch(deleteNotes(note))
	}
}

export default connect(null,mapDispatchToProps)(Archived)
