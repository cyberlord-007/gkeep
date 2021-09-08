import React, { useState } from 'react';
import {
  Nav,
  NavWrapper,
  NavLogo,
  BurgerMenu,
	NavRow,
	NavTitle
} from './NavbarStyles';
import { FaBars,FaClipboardCheck } from 'react-icons/fa';


const Navbar = () => {
	return (
		<>
			<Nav>
				<NavWrapper>
					<BurgerMenu>
						<FaBars />
					</BurgerMenu>
					<NavLogo to='/'>
						<FaClipboardCheck color='yellow' size='40' />
					</NavLogo>
					<NavRow>
						<NavTitle>
							GKeep
						</NavTitle>
					</NavRow>
				</NavWrapper>
			</Nav>
		</>
	)
}

export default Navbar
