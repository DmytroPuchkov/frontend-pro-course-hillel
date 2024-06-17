import React from 'react';

function AddContactForm({ contact, onChange, onSave, onCancel }) {
  return (
    <div className="form-container">
      <h2>Новий контакт</h2>
      <div>
        <label>
          Ім'я:
          <input
            type="text"
            name="name"
            value={contact.name}
            onChange={onChange}
          />
        </label>
      </div>
      <div>
        <label>
          Телефон:
          <input
            type="text"
            name="phone"
            value={contact.phone}
            onChange={onChange}
          />
        </label>
      </div>
      <div className="form-buttons">
        <button onClick={onCancel}>Скасувати</button>
        <button className="btn-add" onClick={onSave}>Зберегти</button>
      </div>
    </div>
  );
}

export default AddContactForm;