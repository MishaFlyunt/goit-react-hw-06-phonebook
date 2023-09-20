import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

import {
  ContactListStyled,
  ContactItemStyled,
  ButtonStyled,
} from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  console.log(contacts);
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contacts.id));

  return (
    <ContactListStyled>
      {contacts.map(({ id, name, number }) => (
        <ContactItemStyled key={id}>
          <p>
            {name}: {number}
          </p>
          <ButtonStyled type="button" onClick={handleDelete}>
            Delete
          </ButtonStyled>
        </ContactItemStyled>
      ))}
    </ContactListStyled>
  );
};
