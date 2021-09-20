import React,{ useEffect } from 'react'
import { connect } from 'react-redux'
import {compose} from 'redux'
import { searchNotes, setAllNotes, setNotes,setQuery } from '../../actions/setNotes'
import { firestoreConnect } from 'react-redux-firebase'
import Search from '../../components/Search/Search'
import Notes from '../../components/Notes/Notes'
import Pinned from '../../components/Pinned/Pinned'

const NotesPage = ({mode,noteState,setQuery,searchQuery,searchNotes,allNotes,setAllNotes}) => {

	



	const handleChange = (e) => {
		setQuery(e.target.value)
		searchNotes(e.target.value)
	}

	return (
		<>
			<Search change={handleChange} value={searchQuery}/>
			<Pinned mode={mode} notes={noteState} />
			<Notes mode={mode} notes={noteState} />
		</>
	)
}

const mapStateToProps = (state) => {
	return {
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

export default connect(mapStateToProps,mapDispatchToProps)(NotesPage)
