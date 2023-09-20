import { createSlice, nanoid } from '@reduxjs/toolkit';
import contacts from '../components/contact.json';

const contactsInitialState = contacts;
console.log(contactsInitialState);

const contactsSlice = createSlice({
  name: 'contact',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
    },
    deleteContact: {
      reducer(state, action) {
        state = state.filter(cont => cont.id !== action.payload);
      },
    },
  },
  // deleteContact(state, action) {
  //   const index = state.findIndex(contact => contact.id === action.payload);
  //   state.splice(index, 1);
  // },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
