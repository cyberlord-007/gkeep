import React from 'react'
import Pinned from '../../components/Pinned/Pinned'
import {connect} from 'react-redux'
import {compose} from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

const PinnedPage = ({mode,notes}) => {

	


	return (
		<>
			<Pinned mode={mode} />
		</>
	)
}


const mapStateToProps = (state) => {
	console.log('state..',state)
	return {
		notes: state.firestore.data.notes
	}
}


export default compose(connect(mapStateToProps,null),firestoreConnect([
	{collection: 'notes'}
]))(Pinned)
