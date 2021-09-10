import React,{useState,useEffect} from 'react'
import { archiveNotes } from '../../actions/archiveNote'
import { NotesContainer,NotesWrapper,NotesCard,CardHeader,Actions,CardTitle,GreyLine,CardBody,NoteDesc} from '../Notes/NoteStyles'
import {BiArchiveIn} from 'react-icons/bi'
import {IoMdArchive} from 'react-icons/io'
import {connect} from 'react-redux'
import {compose} from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import {AiOutlinePushpin} from 'react-icons/ai'
import { PageTitleRow,SectionTitle} from '../../global/PageStyles'



const Archived = ({mode,notes,archiveNotes}) => {


	const [_notes, setNotes] = useState(notes)
	const [archivedNotes,setArchivedNotes] = useState([])

	useEffect(()=>{
		setNotes(notes)
	},[notes])

	useEffect(() => {
		_notes && setArchivedNotes(Object.fromEntries(Object.entries(_notes).filter(([noteDoc,note])=>note.archived===true)))
	},[_notes])

	const handleArchived = (noteDoc) => {
		const note = notes[noteDoc]
		archiveNotes({noteDoc,note})
	}

	return (
		<>
			<NotesContainer mode={mode}>
				{
					_notes?.length > 0 && 
					<PageTitleRow>
						<AiOutlinePushpin size='35' color={mode ? '#fff' : '#000'}/>
						<SectionTitle mode={mode}>Pinned</SectionTitle>
					</PageTitleRow> 
				}
			
				<NotesWrapper>
					{
						Object.keys(archivedNotes).map((noteDoc) => (
							<NotesCard key={archivedNotes[noteDoc].title}>
								<CardHeader>
									<CardTitle>{archivedNotes[noteDoc].title}</CardTitle>
									<Actions>
										
										{archivedNotes[noteDoc].archived ? <IoMdArchive onClick={() =>handleArchived(noteDoc)} size='40' />  : <BiArchiveIn onClick={() => handleArchived(noteDoc)} size='40' />}
									</Actions>
								</CardHeader>
								<GreyLine></GreyLine>
								<CardBody>
									<NoteDesc mode={mode}>
										{archivedNotes[noteDoc].body}
									</NoteDesc>
								</CardBody>
							</NotesCard>
						))
					}
				</NotesWrapper>
			</NotesContainer>
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
		archiveNotes: (note) => dispatch(archiveNotes(note))
	}
}

export default compose(connect(mapStateToProps,mapDispatchToProps),firestoreConnect([
	{collection: 'notes'}
]))(Archived)
