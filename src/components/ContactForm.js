import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, editContact } from '../redux/contactsSlice';
import { Button, Input, FormWrapper } from './StyledComponents';

const ContactForm = ({ existingContact = null, onComplete }) => {
  const dispatch = useDispatch();
  const [contact, setContact] = useState({ name: '', email: '', phone: '' });


  useEffect(() => {
    if (existingContact) {
      setContact(existingContact);
    }
  }, [existingContact]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (existingContact) {
      dispatch(editContact({ ...contact, id: existingContact.id }));
    } else {
      dispatch(addContact({ ...contact, id: Date.now().toString() }));
    }

    if (typeof onComplete === 'function') {
      onComplete();
    } else {
      console.error('onComplete is not a function', onComplete);
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Input type="text" name="name" placeholder="Nome completo" value={contact.name} onChange={handleChange} />
      <Input type="email" name="email" placeholder="E-mail" value={contact.email} onChange={handleChange} />
      <Input type="tel" name="phone" placeholder="Telefone" value={contact.phone} onChange={handleChange} />
      <Button type="submit">{existingContact ? 'Editar' : 'Adicionar'} Contato</Button>
    </FormWrapper>
  );
};

export default ContactForm;
