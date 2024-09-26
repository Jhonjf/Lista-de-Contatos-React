import React, { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

const App = () => {
  const [editingContact, setEditingContact] = useState(null);

  const handleEditContact = (contact) => {
    setEditingContact(contact);
  };

  const handleComplete = () => {
    setEditingContact(null);
  };

  return (
    <div>
      <h1>Lista de seus Contatos</h1>
      <ContactForm existingContact={editingContact} onComplete={handleComplete} />
      <ContactList onEdit={handleEditContact} />
    </div>
  );
};

export default App;
