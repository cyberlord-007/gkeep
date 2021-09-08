import React from 'react'
import { SideBarWrapper,CloseIcon,Icon,SidebarContainer,SidebarMenu,SidebarLink,SidebarLinkWrap,SidebarLinkIcon,SidebarLinkR,SidebarLinkA} from './SidebarStyles'

const Sidebar = ({isOpen,toggle}) => {
	return (
		<>
        <SideBarWrapper isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarContainer onClick={toggle}>
                <SidebarMenu>
                    <SidebarLink onClick={toggle} to='/'>Notes</SidebarLink>
                    <SidebarLink href='https://ogbrands.gurusuites.com/shop'>
                        Shop
                    </SidebarLink>
                    <SidebarLink onClick={toggle} to='/store-locator'>Store Locator</SidebarLink>
                    <SidebarLink onClick={toggle} to='/contact-us'>Contact Us</SidebarLink>
                    <SidebarLink onClick={toggle} to='/distributor'>Distributor</SidebarLink>	
                </SidebarMenu>
            </SidebarContainer>
        </SideBarWrapper>
		</>
	)
}

export default Sidebar
