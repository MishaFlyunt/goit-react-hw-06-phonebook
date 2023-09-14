import { GlobalStyle, Container } from './GlobalStyle';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

import contact from './contact';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useState } from 'react';
import { useEffect } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedItem = localStorage.getItem('conact-filter');
    const parsedItem = JSON.parse(savedItem);
    return parsedItem || contact;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (setContacts !== contacts) {
      // console.log(contacts);
      localStorage.setItem('conact-filter', JSON.stringify(contacts));
    }
  }, [contacts]);

  const changeFilter = newFilter => {
    setFilter(newFilter.target.value.toLowerCase().trim());
  };

  const handleDelete = contId => {
    setContacts(prevState => prevState.filter(cont => cont.id !== contId));
  };

  const addName = newName => {
    contacts.some(
      contact =>
        contact.name.toLowerCase().trim() ===
          newName.name.toLowerCase().trim() ||
        contact.number.trim() === newName.number.trim()
    )
      ? toast.error('A contact with that name or number already exists')
      : setContacts(prevState => [...prevState, newName]);
  };

  const getVisibleContacts = () => {
    const lowerCaseFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(lowerCaseFilter)
    );
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addName} />

      <h2>Contacts</h2>
      <Filter filter={filter} onChangeFilter={changeFilter} />
      <ContactList contact={getVisibleContacts()} onDelete={handleDelete} />

      <Toaster position="top-center" reverseOrder={false} />
      <GlobalStyle />
    </Container>
  );
};
