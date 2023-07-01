import React from 'react';
import { ContactItem } from '../ContactItem/ContactItem';
import { useGetContactsQuery } from 'redux/contactsSlice';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/slice';
import { Loader } from 'components/Loader/Loader';

export const ContactList = () => {
  const { data = [], isLoading, isError } = useGetContactsQuery();

  const filterContact = useSelector(getFilter);

  const getVisibleContact = () => {
    const normalizedContact = filterContact.toLowerCase();
    return data.filter(({ name }) =>
      name.toLowerCase().includes(normalizedContact)
    );
  };

  const visibleContact = getVisibleContact();

  return (
  <>
      {isLoading && <Loader />}
      {isError && <p>Sorry, there was an error.</p>}
    <ul>     
        {!isError && visibleContact?.length === 0 ?
          <p><b>No contacts</b></p> :
         visibleContact?.map(item =>
        <ContactItem key={item.id} contact={ item } />
        )}
    </ul>
  </>
  );
};
