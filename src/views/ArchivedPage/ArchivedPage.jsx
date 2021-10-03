import React from 'react'
import Archived from '../../components/Archived/Archived'
import { connect } from 'react-redux'
import { searchNotes, setQuery } from '../../actions/setNotes'
import Search from '../../components/Search/Search'
import GlobalNotes from '../../components/GlobalNotes/GlobalNotes'


const ArchivedPage = ({mode,setQuery,searchQuery,searchNotes,noteState}) => {

	const handleChange = (e) => {
		setQuery(e.target.value)
		searchNotes(e.target.value)
	}

	return (
		<>
			<Search change={handleChange} value={searchQuery}/>
			{searchQuery ? <GlobalNotes mode={mode} notes={noteState} /> : <Archived mode={mode} notes={noteState}/> }
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


export default connect(mapStateToProps,mapDispatchToProps)(ArchivedPage)
