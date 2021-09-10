import React from 'react'
import { connect } from 'react-redux'
import {pinNotes} from '../../actions/pinNotes'
import {archiveNotes} from '../../actions/archiveNote'
import { NotesContainer,NotesWrapper,NotesCard,CardHeader,Actions,CardTitle,GreyLine,CardBody,NoteDesc} from './NoteStyles'
import { PageTitleRow,SectionTitle } from '../../global/PageStyles'
import {AiFillPushpin,AiOutlinePushpin} from 'react-icons/ai'
import {BiArchiveIn,BiNotepad} from 'react-icons/bi'
import {IoMdArchive} from 'react-icons/io'

const Notes = ({mode,notes,pinNotes,archiveNotes}) => {

	const handlePinned = (noteDoc) => {
		const note = notes[noteDoc]
		pinNotes({noteDoc,note});
	}


	const handleArchived = (noteDoc) => {
		const note = notes[noteDoc]
		archiveNotes({noteDoc,note})
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
							{notes[noteDoc].archived?null:
								<NotesCard key={notes[noteDoc].title}>
								<CardHeader>
									<CardTitle>{notes[noteDoc].title}</CardTitle>
									<Actions>
										{
											notes[noteDoc].pinned ? <AiFillPushpin onClick={()=>handlePinned(noteDoc)} size='40' /> : <AiOutlinePushpin onClick={()=>handlePinned(noteDoc)} size='40' />
										}
										{
											notes[noteDoc].archived ? <IoMdArchive onClick={()=> handleArchived(noteDoc)} size='40' />  : <BiArchiveIn onClick={() => handleArchived(noteDoc)} size='40' />
										}
									</Actions>
								</CardHeader>
								<GreyLine></GreyLine>
								<CardBody>
									<NoteDesc mode={mode}>
										{notes[noteDoc].body}
									</NoteDesc>
								</CardBody>
							</NotesCard>
							}
							</>	
						))
					}
				</NotesWrapper>
			</NotesContainer>
		</>
	)
}



const mapDispatchToProps = (dispatch) => {
	return {
		pinNotes: (note) => dispatch(pinNotes(note)),
		archiveNotes: (note) => dispatch(archiveNotes(note))
	}
}

export default connect(null,mapDispatchToProps)(Notes)
