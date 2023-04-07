import { NavLink } from 'react-router-dom';
import { Div, LinkNav } from './Header.styled';

const Header = () => {
  return (
    <Div>
      <nav>
        <LinkNav to="/">Home</LinkNav>
        <LinkNav to="/movies">Movies</LinkNav>
      </nav>
    </Div>
  );
};

export default Header;
