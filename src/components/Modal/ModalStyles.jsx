import styled from 'styled-components'


export const ModalWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: ${({mode}) => (mode ? 'rgba(255,255,255,0.1)' : '#fff')};
		box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
		border-top: 1px solid rgba(255,255,255,0.5);
		border-left: 1px solid rgba(255,255,255,0.5);
		backdrop-filter: blur(5px);
		transition: all 0.3s ease-in-out;
    z-index: 1000;
		border-radius: 10px;
`

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,.7);
    z-index: 1000;
`

export const ModalHeader = styled.div`
    display: flex;
    padding: 10px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #FCD804;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
`

export const ModalBody = styled.div`
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		padding: 15px;
`


export const InputField = styled.p`
		font-size: 18px;
		color: ${({mode}) => (mode ? '#f7f1f1' : '#7c7979')};
		font-weight: 600;
		margin-bottom: 10px;
`


export const TitleInput = styled.input`
		height: 45px;
		padding: 5px 10px;
		font-size: 24px;
		border: none;
		background: ${({mode}) => (mode ? 'rgba(255,255,255,0.1)' : '#fff')};
		color: ${({mode}) => (mode ? '#fff': '#000')};
		border-bottom: 1px solid #000;
		margin-bottom: 20px;


		&:focus {
			outline: none;
		}
`

export const DescInput = styled.textarea`
		width: 100%;
		font-size: 15px;
		border: none;
		color: ${({mode}) => (mode ? '#fff': '#000')};
		background: ${({mode}) => (mode ? 'rgba(255,255,255,0.1)' : '#fff')};
		border-bottom: 1px solid #000;


		&:focus {
			outline: none;
		}
`


export const ModalHeaderText = styled.h1`
    font-size: 24px;
    font-weight: 600;
    color: #000000;
    text-transform: uppercase;


    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
    
`

export const ModalFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 10px 24px;
`
