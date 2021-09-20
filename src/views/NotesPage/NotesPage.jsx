import React,{ useEffect } from 'react'
import { connect } from 'react-redux'
import {compose} from 'redux'
import { searchNotes, setAllNotes, setNotes,setQuery } from '../../actions/setNotes'
import { firestoreConnect } from 'react-redux-firebase'
import Search from '../../components/Search/Search'
import Notes from '../../components/Notes/Notes'
import Pinned from '../../components/Pinned/Pinned'

const NotesPage = ({mode,notes,setNotes,noteState,setQuery,searchQuery,searchNotes,allNotes,setAllNotes}) => {

	
	useEffect(() => {
		setAllNotes({...notes})
		setNotes({...notes});
	}, [notes]);



	const handleChange = (e) => {
		setQuery(e.target.value)
		searchNotes(e.target.value)
	}

	return (
		<>
			<Search change={handleChange} value={searchQuery}/>
			<Pinned mode={mode} queriedNotes={noteState} />
			<Notes mode={mode} notes={noteState} />
		</>
	)
}

const mapStateToProps = (state) => {
	console.log('state with pinned',state)
	return {
		notes: state.firestore.data.notes,
		noteState: state.note.notes,
		searchQuery: state.note.searchQuery,
		allNotes: state.note.allNotes
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setNotes: (notes) => dispatch(setNotes(notes)),
		setQuery: (query) => dispatch(setQuery(query)),
		searchNotes: (query) => dispatch(searchNotes(query)),
		setAllNotes: (notes) => dispatch(setAllNotes(notes))
	}
}

export default compose(connect(mapStateToProps,mapDispatchToProps),firestoreConnect([
	{collection: 'notes',orderBy: ['createdAt','asc']}
]))(NotesPage)
