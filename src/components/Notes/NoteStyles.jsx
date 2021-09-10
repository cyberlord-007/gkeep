import styled from "styled-components"

export const NotesContainer = styled.div`
		background: ${({mode}) => (mode ? 'rgba(0,0,0,.7)': '#fff')};
`

export const NotesWrapper = styled.div`
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-columns: repeat(auto-fit,minmax(20rem,1fr));
		justify-content: center;
`

export const NotesCard = styled.div`
		height: 300px;
		display: flex;
		flex-direction: column;
		background: rgba(255,255,255,0.1);
		border-radius: 20px;
		cursor: pointer;
		margin: 15px;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
		transition: all 0.3s ease-in-out;
`

export const CardHeader = styled.div`
		max-height: 40px;
		width: 100%;
		padding: 10px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 15px;
`

export const Actions = styled.div`
		width: 90px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding-right: 30px;
`

export const CardTitle = styled.h1`
		font-size: 40px;
		color: #000;
		padding-left: 15px;


		@media screen and (max-width: 480px) {
			font-size: 30px;
		}
`

export const GreyLine = styled.div`
		background: #a8a4a4;
		width: 300px;
		height: 2px;
`

export const CardBody = styled.div`
		margin-top: 10px;
		width: 100%;
		height: 100%;
		display: flex;	
		padding-left: 20px;
`

export const NoteDesc = styled.p`
		font-size: 18px;
		color: ${({mode}) => (mode ? '#dad6d6' : '#7c7979')};
		font-weight: 600;
`