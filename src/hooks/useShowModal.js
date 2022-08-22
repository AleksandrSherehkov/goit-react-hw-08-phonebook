import { useState } from 'react';

const useShowModal = option => {
  const [showModal, setShowModal] = useState(option);
  const toggleModal = () => setShowModal(prevState => !prevState);

  return { toggleModal, showModal };
};

export default useShowModal;
