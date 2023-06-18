import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';

export const LoginPage = () => {
  const dispatch = useDispatch();

  const formHandler = e => {
    e.preventDefault();
    const { email, password } = e.target;

    dispatch(
      logIn({
        email: email.value,
        password: password.value,
      })
    );
  };
  return (
    <main>
      <form onSubmit={formHandler}>
        <label>
          <p>Email</p>
          <input type="email" name="email" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" name="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </main>
  );
};
