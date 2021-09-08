import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export const SideBarWrapper = styled.aside`
    position: fixed;
    z-index: 900;
    width: 300px;
    height: 100%;
    background: ${({mode}) => (mode ? '#000' : '#fff')};
    display: grid;
    align-items: center;
    top: 0;
    left: ${({isOpen}) => (isOpen ? '0' : '-100%')};
    transition: 0.3s  ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const CloseIcon = styled(FaTimes)`
    color: ${({mode}) => (mode ? '#fff' : '#000')};
`

export const SidebarContainer = styled.div`
    color: #fff;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6,80px);
    text-align: center;
		padding-left: 0 !important;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6,60px);
    }
`

export const SidebarRow = styled.div`
		width: 200px;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		text-align: center;
		padding-left: 20px;
`

export const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: ${({mode}) => (mode ? '#fff' : '#000')};
    cursor: pointer;
		padding-left: 40px;

    &:hover {
        color: #F2C94C;
        transition:0.2s ease-in-out;
    }
`
