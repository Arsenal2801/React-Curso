import { createSlice } from '@reduxjs/toolkit'

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: false,
    messageSaved: '',
    notes: [],
    activeNote: null,
    // activeNote: {
    //   id: null,
    //   title: '',
    //   body: '',
    //   date: null,
    //   imageUrl: [],
    // }
  },
  reducers: {
    savingNewNote: (state) => {
      state.isSaving = true;
    },
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.activeNote = action.payload;
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setSaving: (state, action) => {

    },
    updateNotes: (state, action) => {

    },
    deleteNoteById: (state, action) => {

    },

  },
})
export const {
  addNewEmptyNote,
  deleteNoteById, 
  savingNewNote,
  setActiveNote, 
  setNotes, 
  setSaving, 
  updateNotes, 
 } = journalSlice.actions;