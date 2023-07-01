import { useState } from 'react';
import { toast } from 'react-toastify';
import css from './ContactForm.module.css';
import { useAddContactMutation, useGetContactsQuery } from 'redux/contactsSlice';

export const ContactForm = () => {
  const [userName, setUserName] = useState('');
  const [number, setNumber] = useState('');
  const [addContact] = useAddContactMutation();
  const { data } = useGetContactsQuery();

  const handleChange = evt => {
    const { name, value } = evt.currentTarget;
    if (name === 'name') {
      setUserName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

  const reset = () => {
    setUserName('');
    setNumber('');
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (data.some(({ name }) => name === userName)) {
      toast.warn(`${userName} is already contacts`, { theme: 'colored' });
      return;
    }
    addContact({ name: userName, phone: number });
    reset();
  };

  return (
    <form className={css.formContact} onSubmit={handleSubmit}>
      <label>
        <p className={css.text}>Name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          autoFocus
          autoComplete="off"
          onChange={handleChange}
          value={userName}
        />
      </label>
      <label>
        <p>Number</p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          autoComplete="off"
          onChange={handleChange}
          value={number}
        />
      </label>
      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};
