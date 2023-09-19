import { combineReducers } from 'redux';
import { nanoid } from 'nanoid';
import contacts from '../components/contact.json';

const contactInitialState = contacts;

const contactReducer = (state = contactInitialState, action) => {
  switch (action.type) {
    case 'contact/addContact':
      const newContact = {
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      };
      return [...state, newContact];
    case 'contact/deleteContact':
      return state.filter(contact => contact.id !== action.payload);
    default:
      return state;
  }
};

const filtersInitialState = {
  status: '',
};

const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case 'filters/setStatusFilter':
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contact: contactReducer,
  filters: filtersReducer,
});
