import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  background: ${({ mode }) => (mode ? '#000' : '#fff')};
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
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media screen and (max-width: 960px) {
    transition: 0ms.8s all ease;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;

  @media screen and (max-width: 480px) {
    padding: 0;
  }
`;

export const NavLogo = styled(Link)`
  color: ${({ mode }) => (mode ? '#fff' : '#000')};
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;

  @media screen and (max-width: 480px) {
    margin-left: 10px;
  }
`;

export const BurgerMenu = styled.div`
  display: block;
  position: absolute;
  top: 0;
  transform: translate(-100%, 60%);
  font-size: 1.8rem;
  cursor: pointer;
  color: ${({ mode }) => (mode ? '#fff' : '#000')};
  margin-top: 8px;
`;

export const NavRow = styled.div`
  color: ${({ mode }) => (mode ? '#fff' : '#000')};
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 10px;
  cursor: pointer;
`;

export const NavTitle = styled.p`
  color: ${({ mode }) => (mode ? '#fff' : '#000')};
  font-size: 30px;
  font-weight: 600;
`;

export const NavSubRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SearchWrap = styled.span`
  visibility: ${({ clicked }) => (clicked ? 'visible' : 'hidden')};
  width: 300px;
  background-color: #bdc3c7;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  height: 50px;
  position: absolute;
  z-index: 1;
  top: 80%;
  right: 20px;
`;

export const SearchIconWrap = styled.div`
  position: relative;
  display: inline-block;

  /* &:hover ${SearchWrap} {
    visibility: visible;
  } */
`;


