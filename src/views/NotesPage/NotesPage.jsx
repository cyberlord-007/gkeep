import React from 'react';
import { connect } from 'react-redux';
import Notes from '../../components/Notes/Notes';
import Pinned from '../../components/Pinned/Pinned';
import GlobalNotes from '../../components/GlobalNotes/GlobalNotes';

const NotesPage = ({ mode, noteState, searchQuery }) => {
  return (
    <>
      {searchQuery ? (
        <GlobalNotes mode={mode} notes={noteState} />
      ) : (
        <>
          <Pinned mode={mode} notes={noteState} />
          <Notes mode={mode} notes={noteState} />
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    noteState: state.note.notes,
    searchQuery: state.note.searchQuery,
  };
};

export default connect(mapStateToProps, null)(NotesPage);
