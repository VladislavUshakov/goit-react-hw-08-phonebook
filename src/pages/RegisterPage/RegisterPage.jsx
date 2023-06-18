import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const formHandler = e => {
    e.preventDefault();
    const { name, email, password } = e.target;

    dispatch(
      register({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
  };

  return (
    <main>
      <form onSubmit={formHandler}>
        <label>
          <p>Name</p>
          <input type="text" name="name" />
        </label>
        <label>
          <p>Email</p>
          <input type="email" name="email" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </form>
    </main>
  );
};
