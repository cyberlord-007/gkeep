import styled from 'styled-components'
import {Link} from 'react-router-dom'


export const Nav = styled.nav`
    background: #000;
    height: 86px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    padding-right: 50px;
    padding-left: 50px;

    @media screen and (max-width: 960px) {
        transition: 0ms.8s all ease;
    }
`

export const NavWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    height: 86px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
  
`

export const NavLogo = styled(Link)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`

export const BurgerMenu = styled.div`
		display: block;
		position: absolute;
		top: 0;
		transform: translate(-100%,60%);
		font-size: 1.8rem;
		cursor: pointer;
		color: #fff;
		margin-top: 10px;
`

export const NavRow = styled.div`
	color: #fff;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-left: 20px;
`

export const NavTitle = styled.p`
	color: #fff;
	font-size: 30px;
	font-weight: 600;
`
