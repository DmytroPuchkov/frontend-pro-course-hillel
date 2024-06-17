import React, { useState, useEffect } from 'react';
import ContactTable from './ContactTable';
import AddContactForm from './AddContactForm';

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
  const [newContact, setNewContact] = useState({ name: '', phone: '' });

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setContacts(data.map(user => ({
        id: user.id,
        name: user.name,
        phone: user.phone,
      }))));
  }, []);

  const addContact = () => {
    setContacts([...contacts, { id: contacts.length + 1, ...newContact }]);
    setFormVisible(false);
    setNewContact({ name: '', phone: '' });
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const handleInputChange = (event) => {
    setNewContact({ ...newContact, [event.target.name]: event.target.value });
  };

  return (
    <div className="Contacts">
      <h1>Контакти</h1>
      <ContactTable contacts={contacts} onDelete={deleteContact} />
      <button className="btn-add" onClick={() => setFormVisible(true)}>Додати контакт</button>
      {formVisible && (
        <AddContactForm
          contact={newContact}
          onChange={handleInputChange}
          onSave={addContact}
          onCancel={() => setFormVisible(false)}
        />
      )}
    </div>
  );
}

export default Contacts;