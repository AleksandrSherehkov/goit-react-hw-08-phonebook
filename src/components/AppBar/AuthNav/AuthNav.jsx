import { List, Item, Link } from './AuthNav.styleed';

const AuthNav = () => {
  return (
    <List style={{ background: 'red' }}>
      <Item>
        <Link to="/register">Register</Link>
      </Item>
      <Item>
        <Link to="/login">Login</Link>
      </Item>
    </List>
  );
};

export default AuthNav;
