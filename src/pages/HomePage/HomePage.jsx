import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div>
      <p>You need to sign in or register</p>
      <ul>
        <Link to={'/login'}>Login</Link>
        <Link to={'/register'}>Register</Link>
      </ul>
    </div>
  );
};
