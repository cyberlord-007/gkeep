import styled from "styled-components"

export const NotesContainer = styled.div`
		/* background: ${({mode}) => (mode ? '#202124': '#fff')}; */
`

export const NotesWrapper = styled.div`
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-columns: repeat(auto-fit,minmax(20rem,410px));
		justify-content: center;
`

export const Actions = styled.div`
		position: absolute;
		bottom: -15px;
		right: 25px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		@media screen and (max-width: 480px) {
			visibility: visible;
			opacity: 1;
		}
`

export const IconWrap = styled.div`
		height: 45px;
		width: 45px;
		border-radius: 50%;
		background-color: ${({mode}) => (mode ? '#7f8c8d' : '#fff')};
		display: flex;	
		justify-content: center;
		align-items: center;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
		margin-left: 10px;
`

export const NotesCard = styled.div`
		height: 300px;
		position: relative;
		display: ${({show}) => (!show?.title  ? 'none' : 'flex')};
		flex-direction: column;
		background: rgba(255,255,255,0.1);
		border-radius: 20px;
		cursor: pointer;
		margin: 15px;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
		transition: all 0.3s ease-in-out;


		/* &:hover ${Actions} {
			visibility: visible;
			opacity: 1;
		} */
`

export const CardHeader = styled.div`
		max-height: fit-content;
		width: 100%;
		padding: 10px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 10px;
`


export const CardTitle = styled.h1`
		font-size: 28px;
		color: #000;
		word-break: break-all;
		font-weight: 450;


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
		padding:0 10px 10px 10px;
		margin-bottom: 20px;
		overflow:auto;
`

export const NoteDesc = styled.p`
		font-size: 18px;
		line-height: 150%;
		word-spacing: 1px;
		color: ${({mode}) => (mode ? '#dad6d6' : '#7c7979')};
`


