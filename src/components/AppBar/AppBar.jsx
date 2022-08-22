import { Wrapper } from './AppBar.styled';
import Container from 'components/Container/Container';
import Logo from './Logo/Logo';
import Navigations from './Navigations/Navigations';
import AuthNav from './AuthNav/AuthNav';
import UserBar from './UserBar/UserBar';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelecors';

const AppBar = () => {
  const isLoggedIn = useSelector(state => getIsLoggedIn(state));

  return (
    <Container>
      <Wrapper>
        <Logo />
        <Navigations />
        {isLoggedIn ? <UserBar /> : <AuthNav />}
      </Wrapper>
    </Container>
  );
};

export default AppBar;
