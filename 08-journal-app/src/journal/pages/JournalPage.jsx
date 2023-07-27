import { useDispatch, useSelector } from "react-redux"

import { IconButton } from "@mui/material"
import { AddOutlined } from "@mui/icons-material"

import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView, NoteView } from "../views"
import { startNewNote } from "../../store"

export const JournalPage = () => {

  const { isSaving, activeNote } = useSelector(state => state.journal);

  const dispatch = useDispatch();

  const handleAddNew = () => {
    dispatch( startNewNote() )
  };

  return (
    <JournalLayout>
      {/* <Typography>
        Excepteur fugiat officia laborum dolore ex ullamco incididunt laboris dolore est ea aliquip cillum adipisicing.
      </Typography> */}
      {
        ( !!activeNote )
          ? <NoteView />
          : <NothingSelectedView />
      }

      <IconButton
        disabled={isSaving}
        onClick={handleAddNew}
        className="animate__delay-2s animate__animated animate__rubberBand animate__repeat-3"
        size="large"
        sx={
          {
            color: 'white',
            backgroundColor: 'error.main',
            ':hover': {
              backgroundColor: 'error.main',
              opacity: 0.9
            },
            position: 'fixed',
            bottom: 50,
            right: 50,
          }
        }
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>

    </JournalLayout>
  )
}
