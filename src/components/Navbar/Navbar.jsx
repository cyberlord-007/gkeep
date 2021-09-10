import React from 'react';
import {
  Nav,
  NavWrapper,
  NavLogo,
  BurgerMenu,
	NavRow,
	NavTitle
} from './NavbarStyles';
import { FaBars,FaClipboardCheck,FaSun,FaRegSun } from 'react-icons/fa';


const Navbar = ({toggle,toggleDarkMode,mode}) => {

	

	return (
		<>
			<Nav mode={mode}>
				<NavWrapper>
					<BurgerMenu onClick={toggle} mode={mode} >
						<FaBars />
					</BurgerMenu>
					<NavLogo to='/'>
						<FaClipboardCheck color='yellow' size='40' />
					</NavLogo>
					<NavRow>
						<NavTitle mode={mode}>
							GKeep
						</NavTitle>
						{
							mode ? <FaRegSun color={mode ? '#fff' : '#000'} onClick={toggleDarkMode} size='40' /> : <FaSun color={mode ? '#fff' : '#000'} onClick={toggleDarkMode} size='40' />
						}
					</NavRow>
				</NavWrapper>
			</Nav>
		</>
	)
}

export default Navbar
