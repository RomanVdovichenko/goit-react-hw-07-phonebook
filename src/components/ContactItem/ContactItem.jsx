import React from 'react';
import css from './ContactItem.module.css';
import { useDeleteContactMutation } from 'redux/contactsSlice';

export const ContactItem = ({contact}) => {
  const [deleteContact, {isLoading}] = useDeleteContactMutation();

  const handleDeleteContact = () => {
    deleteContact(contact.id);
  }

  return (
    <li>
      <span className={css.user}>{contact.name}:</span>
      <span className={css.contact}>{contact.phone}</span>
      <button
        className={css.btn}
        type="button"
        onClick={handleDeleteContact}
        disabled={isLoading}
      >
        Delete
      </button>
    </li>        
  );
};
