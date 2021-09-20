import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import {compose} from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { setNotes,setAllNotes } from '../actions/setNotes'


const PageWrapper = ({children,setAllNotes,setNotes,notes}) => {

	useEffect(() => {
		setAllNotes({...notes})
		setNotes({...notes});
	}, [notes]);

	return (
		<>
			{children}
		</>
	)
}


const mapStateToProps = (state) => {
	console.log('state with pinned',state)
	return {
		notes: state.firestore.data.notes,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setNotes: (notes) => dispatch(setNotes(notes)),
		setAllNotes: (notes) => dispatch(setAllNotes(notes))
	}
}

export default compose(connect(mapStateToProps,mapDispatchToProps),firestoreConnect([
	{collection: 'notes',orderBy: ['createdAt','asc']}
]))(PageWrapper)
