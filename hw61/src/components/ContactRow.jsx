import React from 'react';

function ContactRow({ contact, onDelete }) {
  return (
    <tr>
      <td>{contact.name}</td>
      <td>{contact.phone}</td>
      <td>
        <button onClick={onDelete}>Видалити</button>
      </td>
    </tr>
  );
}

export default ContactRow;