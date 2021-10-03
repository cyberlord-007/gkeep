import React, { useState } from 'react';
import { connect } from 'react-redux';
import { pinNotes } from '../../actions/pinNotes';
import { archiveNotes } from '../../actions/archiveNote';
import { deleteNotes } from '../../actions/deleteNote';
import {
  NotesContainer,
  NotesWrapper,
  NotesCard,
  CardHeader,
  Actions,
  CardTitle,
  GreyLine,
  CardBody,
  NoteDesc,
  IconWrap,
} from '../Notes/NoteStyles';
import { PageTitleRow, SectionTitle } from '../../global/PageStyles';
import Modal from '../Modal/Modal';
import { AiFillPushpin, AiOutlinePushpin } from 'react-icons/ai';
import { BiArchiveIn, BiNotepad } from 'react-icons/bi';
import { IoMdArchive } from 'react-icons/io';
import { FaTrash } from 'react-icons/fa';

const GlobalNotes = ({
  mode,
  notes,
  pinNotes,
  archiveNotes,
  deleteNotes,
  searchQuery,
}) => {
  const [isOpen, setIsOpen] = useState(localStorage.getItem('clickedNote'));
  const [clickedCard, setClickedCard] = useState({
    ...JSON.parse(localStorage.getItem('clickedNote')),
  });

  const handlePinned = (noteDoc) => {
    const note = notes[noteDoc];
    pinNotes({ noteDoc, note });
  };

  const handleArchived = (noteDoc) => {
    const note = notes[noteDoc];
    archiveNotes({ noteDoc, note });
  };

  const handleClick = (note, noteDoc) => {
    localStorage.setItem(
      'clickedNote',
      JSON.stringify({
        noteData: { ...note },
        noteDoc,
      })
    );
    setIsOpen(true);
    setClickedCard({ ...JSON.parse(localStorage.getItem('clickedNote')) });
  };

  const onClose = () => {
    setIsOpen(false);
    localStorage.removeItem('clickedNote');
  };

  const handleDelete = (noteDoc) => {
    deleteNotes({ noteDoc });
  };

  return (
    <>
      <NotesContainer mode={mode}>
        <PageTitleRow>
          <BiNotepad size='35' color={mode ? '#fff' : '#000'} />
          <SectionTitle mode={mode}>
            {searchQuery ? 'Search Results' : 'Your Notes'}
          </SectionTitle>
        </PageTitleRow>
        <NotesWrapper>
          {notes &&
            Object.keys(notes)?.map((noteDoc, idx) => (
              <>
                {
                  <NotesCard show={notes[noteDoc]} key={notes[noteDoc]?.title}>
                    <CardHeader>
                      <CardTitle>{notes[noteDoc]?.title}</CardTitle>
                    </CardHeader>
                    <GreyLine></GreyLine>
                    <CardBody
                      onClick={() => handleClick(notes[noteDoc], noteDoc)}
                    >
                      <NoteDesc mode={mode}>{notes[noteDoc]?.body}</NoteDesc>
                    </CardBody>
                    <Actions>
                      <IconWrap mode={mode}>
                        {notes[noteDoc]?.pinned ? (
                          <AiFillPushpin
                            onClick={() => handlePinned(noteDoc)}
                            size='25'
                          />
                        ) : (
                          <AiOutlinePushpin
                            onClick={() => handlePinned(noteDoc)}
                            size='25'
                          />
                        )}
                      </IconWrap>
                      <IconWrap mode={mode}>
                        {notes[noteDoc]?.archived ? (
                          <IoMdArchive
                            onClick={() => handleArchived(noteDoc)}
                            size='25'
                          />
                        ) : (
                          <BiArchiveIn
                            onClick={() => handleArchived(noteDoc)}
                            size='25'
                          />
                        )}
                      </IconWrap>
                      <IconWrap mode={mode}>
                        <FaTrash
                          onClick={() => handleDelete(noteDoc)}
                          size='23'
                        />
                      </IconWrap>
                    </Actions>
                  </NotesCard>
                }
              </>
            ))}
        </NotesWrapper>
      </NotesContainer>
      <Modal
        open={isOpen}
        onClose={onClose}
        mode={mode}
        type='edit'
        data={clickedCard}
      />
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    pinNotes: (note) => dispatch(pinNotes(note)),
    archiveNotes: (note) => dispatch(archiveNotes(note)),
    deleteNotes: (note) => dispatch(deleteNotes(note)),
  };
};

const mapStateToProps = (state) => {
  return {
    searchQuery: state.note.searchQuery,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GlobalNotes);
