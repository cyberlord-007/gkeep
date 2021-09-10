import React,{useState} from 'react'
import { NotesContainer,NotesWrapper,NotesCard,CardHeader,Actions,CardTitle,GreyLine,CardBody,NoteDesc} from '../Notes/NoteStyles'
import {BiArchiveIn} from 'react-icons/bi'
import {IoMdArchive} from 'react-icons/io'
import {connect} from 'react-redux'
import {compose} from 'redux'
import { firestoreConnect } from 'react-redux-firebase'


const Pinned = ({mode,pinned}) => {

	const [archived,setArchived] = useState({})

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
						pinned?.map((note,idx) => (
							<NotesCard key={note.title}>
								<CardHeader>
									<CardTitle>{note.title}</CardTitle>
									<Actions>
										{/* {pinned[idx] ? <AiFillPushpin onClick={handlePinned(idx)} size='40' /> : <AiOutlinePushpin onClick={handlePinned(idx)} size='40' />} */}
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
	console.log('state..',state)
	return {
		pinned: state.firestore.ordered.pinned
	}
}

export default compose(connect(mapStateToProps,null),firestoreConnect([
	{collection: 'pinned'}
]))(Pinned)
