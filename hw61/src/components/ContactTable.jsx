import React from 'react';
import ContactRow from './ContactRow';

function ContactTable({ contacts, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Ім'я</th>
          <th>Телефон</th>
          <th>Дія</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map(contact => (
          <ContactRow
            key={contact.id}
            contact={contact}
            onDelete={() => onDelete(contact.id)}
          />
        ))}
      </tbody>
    </table>
  );
}

export default ContactTable;