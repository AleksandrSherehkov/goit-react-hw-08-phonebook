import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import operations from 'redux/auth/authOperations';

const useRegistrUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitForm = ({ name, email, password }) => {
    dispatch(operations.registerUser({ name, email, password }));
    navigate('/contacts');
  };

  return { onSubmitForm };
};

export default useRegistrUser;
