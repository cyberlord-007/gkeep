import React,{useState,useEffect} from 'react'
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





export default PinnedPage
