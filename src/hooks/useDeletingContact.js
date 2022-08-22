import { useNavigate } from 'react-router-dom';
import { useDeleteContactMutation } from 'redux/contacts/contactApi';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const useDeletingContact = (id, name, toggleModal) => {
  const navigate = useNavigate();
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const deleteSelectedContact = () => {
    deleteContact(id);
    navigate('/contacts');
    toggleModal();
    Notify.success(`The ${name} has been removed from your contact list.`);
  };

  return { isDeleting, deleteSelectedContact };
};

export default useDeletingContact;
