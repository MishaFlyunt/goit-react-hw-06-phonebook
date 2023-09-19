export const addContact = text => {
  return {
    type: 'contact/addContact',
    payload: text,
  };
};

export const deleteContact = contactId => {
  return {
    type: 'contact/deleteContact',
    payload: contactId,
  };
};

export const setStatusFilter = value => {
  return {
    type: 'filters/setStatusFilter',
    payload: value,
  };
};
