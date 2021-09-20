import React from 'react'
import { SearchWrap,SearchBar} from '../../global/PageStyles'

const Search = ({change,value}) => {
	return (
		<>
			<SearchWrap>
				<SearchBar onChange={change} type='text' name='search' value={value} placeholder='Search...' />
			</SearchWrap>
		</>
	)
}

export default Search
