import React from 'react';
import { useDispatch } from 'react-redux';
import { removeContact } from '../redux/contactsSlice';

const ContactItem = ({ contact, onEdit }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(removeContact(contact.id));
    };

    const handleEdit = () => {
        onEdit(contact);
    };

    return (
        <div>
            <p>{contact.name} - {contact.email} - {contact.phone}</p>
            <button onClick={handleEdit}>Editar</button>
            <button onClick={handleDelete}>Excluir</button>
        </div>
    );
};

export default ContactItem;
