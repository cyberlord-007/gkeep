import React from 'react'
import { connect } from 'react-redux'
import { searchNotes, setQuery } from '../../actions/setNotes'
import Pinned from '../../components/Pinned/Pinned'
import Search from '../../components/Search/Search'

const PinnedPage = ({mode,setQuery,searchQuery,searchNotes,noteState}) => {


	const handleChange = (e) => {
		setQuery(e.target.value)
		searchNotes(e.target.value)
	}

	return (
		<>
			<Search change={handleChange} value={searchQuery}/>
			<Pinned mode={mode} queriedNotes={noteState}/>
		</>
	)
}

const mapStateToProps = (state) => {
	return {
		searchQuery: state.note.searchQuery,
		noteState: state.note.notes,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setQuery: (query) => dispatch(setQuery(query)),
		searchNotes: (query) => dispatch(searchNotes(query))
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(PinnedPage)
