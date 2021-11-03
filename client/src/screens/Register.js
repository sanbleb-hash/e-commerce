import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Store } from '../context.store';

const Register = () => {
  const location = useLocation();
  const { dispatch } = useContext(Store);
  const redirect = location.search ? location.search.split('=')[1] : '/';

  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    if (password !== confirmPassword) {
      setMessage('passwords do not match');
    }
  }, []);

  const handleSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/users', {
        name,
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

  return (
    <div className="w-full min-h-[0vh] pt-20 bg-gray-300 py-10">
      <h1 className="text-center text-4xl mb-9 text-gray-600 font-birthstone ">
        register
      </h1>
      {<span className="py-4 bg-red-300 h-11 w-24 mx-auto">{message}</span>}
      <form
        className="flex flex-col mx-auto w-2/4 bg-gray-200 border-gray-200 shadow-lg border py-5 px-9 items-center justify-center  min-w-[300px] my-auto"
        onSubmit={handleSubmitHandler}
      >
        <div className=" flex justify-between items-center my-5 w-full font-birthstone  text-sm ">
          <label>name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-4/6 focus:outline-none focus:border-gray-100 rounded-md border border-gray-300 "
          />
        </div>

        <div className=" flex justify-between items-center my-5 w-full font-birthstone  text-sm ">
          <label>email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-4/6 focus:outline-none focus:border-gray-100 rounded-md border border-gray-300 "
          />
        </div>

        <div className=" flex justify-between items-center my-5 w-full  text text-sm -xl">
          <label htmlFor="passsword">password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            className="w-4/6 focus:outline-none focus:border-gray-100 rounded-md border border-gray-300 "
          />
        </div>
        <div className=" flex justify-between items-center my-5 w-full font-birthstosm:ne text text-sm -xl">
          <label htmlFor="confirmPassword">confirm password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            id="confirmPassword"
            className="w-4/6 focus:outline-none focus:border-gray-100 rounded-md border border-gray-300 p-3  "
          />
        </div>

        <button
          className="bg-blue-300 px-6 py-1 text-gray-600 active:bg-blue-700
        hover:bg-blue-500 active:text-white hover:scale-110 transition-all delay-100 ease-in w-full   "
        >
          register
        </button>
        <p className="py-6 text-center  italic">
          already have account{' '}
          <span
            className="underline cursor-pointer  "
            onClick={() => history.goBack()}
          >
            sign in
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
