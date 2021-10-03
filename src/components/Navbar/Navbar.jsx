import React, { useState } from 'react';
import {
  Nav,
  NavWrapper,
  NavLogo,
  BurgerMenu,
  NavRow,
  NavTitle,
  NavSubRow,
  SearchIconWrap,
  SearchWrap,
  SearchBar,
} from './NavbarStyles';
import {
  FaBars,
  FaClipboardCheck,
  FaSun,
  FaRegSun,
  FaSearch,
  FaTimes,
} from 'react-icons/fa';
import Search from '../Search/Search';
import { connect } from 'react-redux';
import { setQuery, searchNotes } from '../../actions/setNotes';

const Navbar = ({
  toggle,
  toggleDarkMode,
  mode,
  searchQuery,
  searchNotes,
  setQuery,
}) => {
  const [openSearch, setOpenSearch] = useState(false);

  const handleOpenSearch = (e) => {
    setOpenSearch(() => !openSearch);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
    searchNotes(e.target.value);
  };

  return (
    <>
      <Nav mode={mode}>
        <NavWrapper>
          <BurgerMenu onClick={toggle} mode={mode}>
            <FaBars />
          </BurgerMenu>
          <NavLogo to='/'>
            <FaClipboardCheck color='yellow' size='40' />
          </NavLogo>
          <NavRow>
            <NavTitle mode={mode}>GKeep</NavTitle>
            <NavSubRow>
              <SearchIconWrap onClick={(e) => handleOpenSearch(e)}>
                {openSearch ? (
                  <FaTimes
                    color={mode ? '#fff' : '#000'}
                    style={{ marginRight: '15px' }}
                    size={window.screen.width < 480 ? '28' : '40'}
                  />
                ) : (
                  <FaSearch
                    color={mode ? '#fff' : '#000'}
                    style={{ marginRight: '15px' }}
                    size={window.screen.width < 480 ? '28' : '40'}
                  />
                )}
              </SearchIconWrap>
              <Search
                change={handleChange}
                value={searchQuery}
                clicked={openSearch}
              />
              {mode ? (
                <FaRegSun
                  color={mode ? '#fff' : '#000'}
                  onClick={toggleDarkMode}
                  size={window.screen.width < 480 ? '28' : '40'}
                />
              ) : (
                <FaSun
                  color={mode ? '#fff' : '#000'}
                  onClick={toggleDarkMode}
                  size={window.screen.width < 480 ? '28' : '40'}
                />
              )}
            </NavSubRow>
          </NavRow>
        </NavWrapper>
      </Nav>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    searchQuery: state.note.searchQuery,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setQuery: (query) => dispatch(setQuery(query)),
    searchNotes: (query) => dispatch(searchNotes(query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
