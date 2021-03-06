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
} from './NoteStyles';
import { PageTitleRow, SectionTitle } from '../../global/PageStyles';
import Modal from '../Modal/Modal';
import { AiFillPushpin, AiOutlinePushpin } from 'react-icons/ai';
import { BiArchiveIn, BiNotepad } from 'react-icons/bi';
import { IoMdArchive } from 'react-icons/io';
import { FaTrash } from 'react-icons/fa';

const Notes = ({ mode, notes, pinNotes, archiveNotes, deleteNotes }) => {
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
          <SectionTitle mode={mode}>Your Notes</SectionTitle>
        </PageTitleRow>
        <NotesWrapper>
          {notes &&
            Object.keys(notes)?.map((noteDoc, idx) => (
              <>
                {notes[noteDoc]?.archived ? null : (
                  <NotesCard
                    onClick={() => handleClick(notes[noteDoc], noteDoc)}
                    show={notes[noteDoc]}
                    key={notes[noteDoc]?.title}
                  >
                    <CardHeader>
                      <CardTitle>{notes[noteDoc]?.title}</CardTitle>
                    </CardHeader>
                    <GreyLine></GreyLine>
                    <CardBody>
                      <NoteDesc mode={mode}>{notes[noteDoc]?.body}</NoteDesc>
                    </CardBody>
                    <Actions>
                      <IconWrap mode={mode}>
                        {notes[noteDoc]?.pinned ? (
                          <AiFillPushpin
                            onClick={(e) => {
                              e.stopPropagation();
                              handlePinned(noteDoc);
                            }}
                            size='25'
                          />
                        ) : (
                          <AiOutlinePushpin
                            onClick={(e) => {
                              e.stopPropagation();
                              handlePinned(noteDoc);
                            }}
                            size='25'
                          />
                        )}
                      </IconWrap>
                      <IconWrap mode={mode}>
                        {notes[noteDoc]?.archived ? (
                          <IoMdArchive
                            onClick={(e) => {
                              e.stopPropagation();
                              handleArchived(noteDoc);
                            }}
                            size='25'
                          />
                        ) : (
                          <BiArchiveIn
                            onClick={(e) => {
                              e.stopPropagation();
                              handleArchived(noteDoc);
                            }}
                            size='25'
                          />
                        )}
                      </IconWrap>
                      <IconWrap mode={mode}>
                        <FaTrash
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(noteDoc);
                          }}
                          size='23'
                        />
                      </IconWrap>
                    </Actions>
                  </NotesCard>
                )}
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

export default connect(null, mapDispatchToProps)(Notes);
