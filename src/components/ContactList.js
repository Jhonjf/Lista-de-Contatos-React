import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../redux/contactsSlice';
import ContactItem from './ContactItem';

const ContactList = ({ onEdit }) => {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeContact(id));
  };

  return (
    <div>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDelete={handleDelete}
          onEdit={onEdit} 
        />
      ))}
    </div>
  );
};

export default ContactList;
