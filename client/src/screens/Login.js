import { useContext, useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Store } from '../context.store';

const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  const redirect = location.search ? location.search.split('=')[1] : '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    if (userInfo) {
      history.push(redirect || '/');
    }
  }, [redirect, history, userInfo]);

  const handleSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/users/login', {
        email,
        password,
      });
      dispatch({ type: 'USER_LOGIN', payload: data });
      Cookies.set('userInfo', data);
      history.push(redirect || '/');
    } catch (err) {
      console.log(err);
    }
  };
  console.log(userInfo);
  return (
    <div className="w-full min-h-[0vh] pt-20 bg-gray-300 py-10">
      <h1 className="text-center text-4xl mb-9 text-gray-600 font-birthstone ">
        login
      </h1>
      <form
        className="flex flex-col mx-auto w-2/4 bg-gray-200 border-gray-200 shadow-lg border py-5 px-9 items-center justify-center  min-w-[300px] my-auto"
        onSubmit={handleSubmitHandler}
      >
        <div className=" flex justify-between items-center my-3 w-full font-birthstone sm:text-xl text-sm">
          <label htmlFor="email">email</label>
          <input
            required
            autoComplete={false}
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-4/6 focus:outline-none focus:border-gray-100 rounded-md border border-gray-300 "
          />
        </div>

        <div className=" flex justify-between items-center my-5 w-full font-birthstone sm:text-xl text-sm">
          <label htmlFor="passsword">password</label>
          <input
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            className="w-4/6 focus:outline-none focus:border-gray-100 rounded-md border border-gray-300 "
          />
        </div>

        <button
          type="submit"
          className="bg-blue-300 px-6 py-1 text-gray-600 active:bg-blue-700
        hover:bg-blue-500 active:text-white hover:scale-110 transition-all delay-100 ease-in w-full   "
        >
          login
        </button>
        <p className="pt-6 italic ">
          {' '}
          dont have acount {''}
          <Link to="/register">
            <a className="underline text-gray-500 hover:text-gray-700">
              create acount
            </a>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
