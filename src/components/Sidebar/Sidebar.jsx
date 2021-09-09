import React from 'react'
import { SideBarWrapper,CloseIcon,Icon,SidebarContainer,SidebarMenu,SidebarLink,SidebarRow} from './SidebarStyles'
import {FaLightbulb,FaThumbtack,FaCalendar,FaTrash} from 'react-icons/fa'


const Sidebar = ({isOpen,toggle,mode}) => {
	return (
		<>
        <SideBarWrapper mode={mode} isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon mode={mode}/>
            </Icon>
            <SidebarContainer onClick={toggle}>
                <SidebarMenu>
                    <SidebarRow>
											<FaLightbulb color={mode ? '#fff' : '#000'} size='25' />
											<SidebarLink mode={mode} onClick={toggle} to='/'>Notes</SidebarLink>
										</SidebarRow>
                    <SidebarRow>
											<FaThumbtack color={mode ? '#fff' : '#000'} size='25' />
											<SidebarLink mode={mode} onClick={toggle} to='/'>Pinned</SidebarLink>
										</SidebarRow>	
                    <SidebarRow>
											<FaCalendar color={mode ? '#fff' : '#000'} size='25' />
											<SidebarLink mode={mode} onClick={toggle} to='/'>Archived</SidebarLink>
										</SidebarRow>	
                    <SidebarRow>
											<FaTrash color={mode ? '#fff' : '#000'} size='25' />
											<SidebarLink mode={mode} onClick={toggle} to='/'>Trash</SidebarLink>
										</SidebarRow>		
                </SidebarMenu>
            </SidebarContainer>
        </SideBarWrapper>
		</>
	)
}

export default Sidebar
