import { NavLink } from 'react-router-dom';
import { Nav } from './Navigation.styles';

export const Navigation = () => {
  return (
    <Nav>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/contacts'}>Contacts</NavLink>
    </Nav>
  );
};
