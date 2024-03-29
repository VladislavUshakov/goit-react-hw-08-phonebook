import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logOut } from 'redux/auth/authOperations';
import { selectEmail, selectIsLoggedIn } from 'redux/auth/authSelectors';
import { Container } from './UserMenu.styles';
import { Nav } from 'components/Navigation';

export const UserMenu = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const email = useSelector(selectEmail);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = e => {
    e.preventDefault();
    dispatch(logOut());
    navigate('/');
  };

  return (
    <Container>
      {isLoggedIn ? (
        <>
          <button onClick={logoutHandler}>Logout</button>
          <p>{email}</p>
        </>
      ) : (
        <Nav>
          <Link to={'/login'}>Login</Link>
          <Link to={'/register'}>Register</Link>
        </Nav>
      )}
    </Container>
  );
};
