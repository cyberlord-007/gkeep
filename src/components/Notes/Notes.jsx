import React,{useState} from 'react'
import { connect } from 'react-redux'

import {pinNotes} from '../../actions/pinNotes'
import {archiveNotes} from '../../actions/archiveNote'
import { NotesContainer,NotesWrapper,NotesCard,CardHeader,Actions,CardTitle,GreyLine,CardBody,NoteDesc} from './NoteStyles'
import {AiFillPushpin,AiOutlinePushpin} from 'react-icons/ai'
import {BiArchiveIn} from 'react-icons/bi'
import {IoMdArchive} from 'react-icons/io'

const Notes = ({mode,notes,pinNotes,archiveNotes}) => {

	const [pinned,setPinned] = useState({})
	const [archived,setArchived] = useState({})

	// const handlePinned = (idx) => () => {
	// 	setPinned(pinned => ({
	// 		...pinned,
	// 		[idx]: !pinned[idx]
	// 	}))
	// 	console.log({pinned})
	// 	pinNotes({...notes[idx]})
	// }

	const handlePinned = (noteDoc) => {
		const note = notes[noteDoc]
		pinNotes({noteDoc,note});
	}


	const handleArchived = (idx) => () => {
		setArchived(archived => ({
			...archived,
			[idx]: !archived[idx]
		}))
		archiveNotes({...notes[idx]})
	}

	return (
		<>
			<NotesContainer mode={mode}>
				<NotesWrapper>
					{
						notes && Object.keys(notes)?.map((noteDoc,idx) => (
							<NotesCard key={notes[noteDoc].title}>
								<CardHeader>
									<CardTitle>{notes[noteDoc].title}</CardTitle>
									<Actions>
										{notes[noteDoc].pinned ? <AiFillPushpin onClick={()=>handlePinned(noteDoc)} size='40' /> : <AiOutlinePushpin onClick={()=>handlePinned(noteDoc)} size='40' />}
										{notes[noteDoc].archived ? <IoMdArchive onClick={handleArchived(idx)} size='40' />  : <BiArchiveIn onClick={handleArchived(idx)} size='40' />}
									</Actions>
								</CardHeader>
								<GreyLine></GreyLine>
								<CardBody>
									<NoteDesc mode={mode}>
										{notes[noteDoc].body}
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



const mapDispatchToProps = (dispatch) => {
	return {
		pinNotes: (note) => dispatch(pinNotes(note)),
		archiveNotes: (note) => dispatch(archiveNotes(note))
	}
}

export default connect(null,mapDispatchToProps)(Notes)
