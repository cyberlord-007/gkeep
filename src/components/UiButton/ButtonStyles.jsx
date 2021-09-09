import styled from 'styled-components'


export const Button = styled.div`
    display: flex;
		justify-content: center;
		align-items: center;
    border-radius: 5px;
    margin-bottom: ${props => props.marginB ? props.marginB : 0};
    margin-top: ${props => props.marginT ? props.marginT : 0};
    margin-left: ${props => props.marginL ? props.marginL : 0};
    text-align: center;
    width: ${props => props.width};
    height: ${props => props.height ? props.height : '35px'};
    font-size: ${props => props.fontSize ? props.fontSize : '16px'};
    font-weight: 500;
    background: ${props => props.primary  ? '#FCD804' :  props.special ? '#000000' : props.secondary ? '#c2bdbd' : '#fff'};
    color: ${props => props.color ? props.color : 'black'};
    cursor: pointer;
    text-decoration: none;

    &:hover {
        background: ${props => props.hover==true ? 'black' : props.noHover ? props.special : '#FCD804' };
        color: ${props => props.hover==true ? 'white' : props.noHover ? '#fff' : 'black'}
    }
`
