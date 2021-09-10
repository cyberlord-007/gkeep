import React,{useState} from 'react'
import { connect } from 'react-redux'
import {compose} from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { NotesContainer,NotesWrapper,NotesCard,CardHeader,Actions,CardTitle,GreyLine,CardBody,NoteDesc} from './NoteStyles'
import {AiFillPushpin,AiOutlinePushpin} from 'react-icons/ai'
import {BiArchiveIn} from 'react-icons/bi'
import {IoMdArchive} from 'react-icons/io'

const Notes = ({mode,notes}) => {

	const [pinned,setPinned] = useState({})
	const [archived,setArchived] = useState({})

	const handlePinned = (idx) => () => {
		setPinned(pinned => ({
			...pinned,
			[idx]: !pinned[idx]
		}))
	}

	const handleArchived = (idx) => () => {
		setArchived(archived => ({
			...archived,
			[idx]: !archived[idx]
		}))
	}

	return (
		<>
			<NotesContainer mode={mode}>
				<NotesWrapper>
					{
						notes?.map((note,idx) => (
							<NotesCard key={note.title}>
								<CardHeader>
									<CardTitle>{note.title}</CardTitle>
									<Actions>
										{pinned[idx] ? <AiFillPushpin onClick={handlePinned(idx)} size='40' /> : <AiOutlinePushpin onClick={handlePinned(idx)} size='40' />}
										{archived[idx] ? <IoMdArchive onClick={handleArchived(idx)} size='40' />  : <BiArchiveIn onClick={handleArchived(idx)} size='40' />}
									</Actions>
								</CardHeader>
								<GreyLine></GreyLine>
								<CardBody>
									<NoteDesc mode={mode}>
										{note.body}
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
	console.log('state',state)
	return {
		notes: state.firestore.ordered.notes
	}
}

export default compose(connect(mapStateToProps),firestoreConnect([
	{collection: 'notes'}
]))(Notes)
