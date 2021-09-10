import styled from 'styled-components'

export const PageContainer = styled.div`
		width: 100%;
		height: 100%;
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