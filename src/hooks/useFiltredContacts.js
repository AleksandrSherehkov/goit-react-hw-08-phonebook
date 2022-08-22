import { useGetContactsQuery } from 'redux/contacts/contactApi';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts/contactSelectors';

const useFiltredContacts = () => {
  const { data: contacts } = useGetContactsQuery();
  const { filter } = useSelector(state => getFilter(state));

  const filtredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return (
      contacts && contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
    );
  };

  const filteredContactList = filtredContacts();

  return { filteredContactList };
};

export default useFiltredContacts;
