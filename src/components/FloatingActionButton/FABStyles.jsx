import styled from 'styled-components'

export const FaButton = styled.div`
   width: 70px;
   height: 70px;
	 position: fixed;
   right: 50px;
   bottom: 50px;
	 display: flex;
	 justify-content: center;
	 align-items: center;
   background-color: ${({mode}) => (mode ? '#000' : '#fff')};
   border-radius: 50%;
   box-shadow: 0 6px 10px 0 #666;
   transition: all 0.1s ease-in-out;
   font-size: 30px;
   color: ${({mode}) => (mode ? '#fff' : '#000')};
   text-align: center;
   line-height: 70px;
	 cursor: pointer;
	 z-index: 100;

	 &:hover {
		 box-shadow: 0 6px 14px 0 #666;
   	 transform: scale(1.05);
	 }
`