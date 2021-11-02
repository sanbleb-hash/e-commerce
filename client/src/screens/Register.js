import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Register = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = {
      name: '',
      secondName: '',
      password: '',
    };
  };
  return (
    <div className="w-full min-h-[60vh] pt-20 bg-gray-300 py-10">
      <h1 className="text-center text-4xl mb-9 text-gray-600 font-birthstone ">
        register
      </h1>
      <form
        className="flex flex-col mx-auto
        bg-gray-200  w-2/6 border-gray-200 shadow-lg border py-5 px-9 items-center justify-center mb-5 min-w-[300px] "
        onSubmit={() => handleSubmit}
      >
        <div className=" flex justify-between items-center my-5 w-full font-birthstone sm:text-xl text-sm ">
          <label>name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-4/6 focus:outline-none focus:border-gray-100 rounded-md border border-gray-300 "
          />
        </div>

        <div className=" flex justify-between items-center my-5 w-full font-birthstone sm:text-xl text-sm ">
          <label>email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-4/6 focus:outline-none focus:border-gray-100 rounded-md border border-gray-300 "
          />
        </div>

        <div className=" flex justify-between items-center my-5 w-full font-birthstosm:ne text text-sm -xl">
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
            type="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            id="confirmPassword"
            className="w-4/6 focus:outline-none focus:border-gray-100 rounded-md border border-gray-300 "
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
