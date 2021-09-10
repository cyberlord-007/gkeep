import styled from 'styled-components'

export const PageContainer = styled.div`
		width: 100%;
		min-height: 100vh;
		background: ${({mode}) => (mode ? '#202124': '#fff')};
`

export const PageTitleRow = styled.div`
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		margin: 20px;	
`


export const SectionTitle = styled.h1`
		padding-left: 10px;
		font-size: 35px;
		color: ${({mode}) => (mode ? '#dad6d6' : '#7c7979')};
`

export const SearchWrap = styled.div`
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin: 20px 100px;
`

export const SearchBar = styled.input`

		&[type = text] {
			width: 300px;
			box-sizing: border-box;
			border: 2px solid #ccc;
			border-radius: 4px;
			font-size: 16px;
			background-color: white;
			background-image: url('searchicon.png');
			background-position: 10px 10px; 
			background-repeat: no-repeat;
			padding: 12px 20px 12px 40px;
			-webkit-transition: width 0.4s ease-in-out;
			transition: width 0.4s ease-in-out;
		}


		&[type = text]:focus {
			width: 100%;
		}

`