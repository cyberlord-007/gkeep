import React,{useState, useEffect} from 'react'
import { connect } from 'react-redux'
import {compose} from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { PageTitleRow,SectionTitle,SearchWrap,SearchBar} from '../../global/PageStyles'
import {AiOutlinePushpin} from 'react-icons/ai'
import Notes from '../../components/Notes/Notes'
import Pinned from '../../components/Pinned/Pinned'

const NotesPage = ({mode,notes}) => {

	
	const [searchQuery,setSearchQuery] = useState('')
	const [noteState,setNoteState] = useState(notes)

	useEffect(() => {
		setNoteState(notes)
	}, [notes])


	const searchNotes = (_searchQuery) => {
		if(_searchQuery && _searchQuery.trim()) {
			const filteredResults = Object.values(notes).filter(note => (
				note.title.toLowerCase().includes(_searchQuery.toLowerCase()) || note.body.toLowerCase().includes(_searchQuery.toLowerCase())
			))
			setNoteState(filteredResults)
		}
	}


	const handleChange = (e) => {
		setSearchQuery(e.target.value)
		searchNotes(e.target.value)
	}

	return (
		<>
			<SearchWrap>
				<SearchBar onChange={handleChange} type='text' name='search' value={searchQuery} placeholder='Search...' />
			</SearchWrap>
			<Notes mode={mode} notes={noteState} />
			<PageTitleRow>
				<AiOutlinePushpin size='35' color={mode ? '#fff' : '#000'}/>
				<SectionTitle mode={mode}>Pinned</SectionTitle>
			</PageTitleRow>
			<Pinned mode={mode} />
		</>
	)
}

const mapStateToProps = (state) => {
	console.log('state',state)
	return {
		notes: state.firestore.data.notes
	}
}

export default compose(connect(mapStateToProps,null),firestoreConnect([
	{collection: 'notes'}
]))(NotesPage)
