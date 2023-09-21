import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import contacts from '../components/contact.json';

const contactsInitialState = contacts;

const contactsSlice = createSlice({
  name: 'contact',
  initialState: contactsInitialState,
  initialStateFilter: '',
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

// const persistConfig = {
//   key: 'contact',
//   storage,
// };

export const { addContact, deleteContact } = contactsSlice.actions;
// export const contactsReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );
export const contactsReducer = contactsSlice.reducer;
