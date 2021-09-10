import React,{useState, useEffect} from 'react'
import { connect } from 'react-redux'
import {compose} from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { SearchWrap,SearchBar} from '../../global/PageStyles'

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
				note.title?.toLowerCase().includes(_searchQuery?.toLowerCase()) || note.body?.toLowerCase().includes(_searchQuery?.toLowerCase())
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
			<Pinned mode={mode} queriedNotes={noteState} />
			<Notes mode={mode} notes={noteState} />
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
