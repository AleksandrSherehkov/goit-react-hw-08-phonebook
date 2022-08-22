import PhoneBook from '../images/PhoneBook.jpg';
import Container from 'components/Container/Container';

const HomePage = () => {
  return (
    <Container>
      <img src={PhoneBook} alt="Phone book" />
    </Container>
  );
};

export default HomePage;
