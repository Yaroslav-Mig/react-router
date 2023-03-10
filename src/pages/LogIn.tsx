import { ChangeEvent, FormEvent, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import '../index.css';

import { useAuthContext } from '../hoc/useAuthContext';

const errorStr = 'Empty input is error! Please write your name';

const LoginPage = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuthContext();

  const [name, setName] = useState<string>('');
  const [error, setError] = useState<string>('');

  const fromPage = location.state.from?.pathname || '/';

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
		const trimName = name.trim();

    if (!trimName) {
      setError(errorStr);
    } else {
      login(trimName, () => navigate(fromPage, { replace: true }));
    }
  };

  const setNameHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setName(e.currentTarget.value.trim());
    error && setError('');
	};

  const blurHandler = (): void => {
    !name.trim() && setError(errorStr);
	};

	const focusHandler = (): void => setError('');


  return (
    <>
      <h2>Login page </h2>
      <form action='#' method='post' onSubmit={submitHandler}>
        <label htmlFor='login'>Enter your login: </label>
        <input
          id='login'
          name='userName'
          value={name}
          type='text'
					size={30}
					minLength={2}
          placeholder='write here'
          autoComplete='off'
          onChange={setNameHandler}
					onBlur={blurHandler}
					onFocus={focusHandler}
        />
        <button type='submit'>Login</button>
      </form>
      {error && <span className='error'>{error}</span>}
    </>
  );
};

export default LoginPage;
