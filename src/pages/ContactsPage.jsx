import Container from 'components/Container/Container';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import Message from 'components/Message/Message';
import { useGetContactsQuery } from 'redux/contacts/contactApi';
import AddButton from 'components/AddButton/AddButton';

const ContactsPage = () => {
  const { data: contacts } = useGetContactsQuery();

  return (
    <Container title="Contacts">
      <AddButton text="Add new contact" />
      <Filter />
      {contacts && contacts.length > 0 ? (
        <ContactList />
      ) : (
        <Message message="Contact list is empty." />
      )}
    </Container>
  );
};

export default ContactsPage;
