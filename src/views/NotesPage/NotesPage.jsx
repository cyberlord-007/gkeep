import React from 'react'
import { PageTitleRow,SectionTitle } from '../../global/PageStyles'
import {AiOutlinePushpin} from 'react-icons/ai'
import Notes from '../../components/Notes/Notes'
import Pinned from '../../components/Pinned/Pinned'

const NotesPage = ({mode}) => {
	return (
		<>
			<Notes mode={mode} />
			<PageTitleRow>
				<AiOutlinePushpin size='35' color={mode ? '#fff' : '#000'}/>
				<SectionTitle mode={mode}>Pinned</SectionTitle>
			</PageTitleRow>
			<Pinned mode={mode} />
		</>
	)
}

export default NotesPage
