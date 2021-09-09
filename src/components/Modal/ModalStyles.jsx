import styled from 'styled-components'


export const ModalWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #fff;
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
    width: 100%;
    display: flex;
    padding: 15px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #FCD804;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
`

export const ModalBody = styled.div`
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 15px;
`


export const TitleInput = styled.input`
		width: 100%;
		height: 45px;
		padding: 10px;
		font-size: 24px;
		border: none;
		border-bottom: 1px solid #000;
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
    /* width: 100%; */
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 10px 24px;
`
