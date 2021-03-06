import React from 'react';
import { connect } from 'react-redux';
import {
  searchNotes,
  setQuery,
  setAllNotes,
  setNotes,
} from '../../actions/setNotes';
import Pinned from '../../components/Pinned/Pinned';
import GlobalNotes from '../../components/GlobalNotes/GlobalNotes';

const PinnedPage = ({
  mode,
  setQuery,
  searchQuery,
  searchNotes,
  noteState,
}) => {

  return (
    <>
      {searchQuery ? (
        <GlobalNotes mode={mode} notes={noteState} />
      ) : (
        <Pinned mode={mode} notes={noteState} />
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  console.log('state with pinned', state);
  return {
    noteState: state.note.notes,
    searchQuery: state.note.searchQuery,
    allNotes: state.note.allNotes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setNotes: (notes) => dispatch(setNotes(notes)),
    setQuery: (query) => dispatch(setQuery(query)),
    searchNotes: (query) => dispatch(searchNotes(query)),
    setAllNotes: (notes) => dispatch(setAllNotes(notes)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PinnedPage);
