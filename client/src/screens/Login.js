import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();
  const redirect = history.query;
  //   const { state, dispatch } = useContext(Store);
  //   const { userInfo } = state;
  //   if (userInfo) {
  //     router.push('/');
  //   }
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // try {
    //   const { data } = await axios.post('/api/users/login', {
    //     email,
    //     password,
    //   });
    //   dispatch({ type: 'USER_LOGIN', payload: data });
    //   Cookies.set('userInfo', JSON.stringify(data));
    //   router.push(redirect || '/');
    //   window.alert('logged in succesfully !!');
    // } catch (error) {
    //   alert(error, message);
    // }
  };
  return (
    <div className="w-full min-h-[70vh] pt-20 bg-gray-300 py-10">
      <h1 className="text-center text-4xl mb-9 text-gray-600 font-birthstone ">
        login
      </h1>
      <form
        className="flex flex-col mx-auto w-2/6 bg-gray-200 border-gray-200 shadow-lg border py-5 px-9 items-center justify-center  min-w-[300px] my-auto"
        onSubmit={() => handleSubmit}
      >
        <div className=" flex justify-between items-center my-5 w-full font-birthstone sm:text-xl text-sm">
          <label>name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-4/6 focus:outline-none focus:border-gray-100 rounded-md border border-gray-300 "
          />
        </div>

        <div className=" flex justify-between items-center my-3 w-full font-birthstone sm:text-xl text-sm">
          <label htmlFor="email">email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-4/6 focus:outline-none focus:border-gray-100 rounded-md border border-gray-300 "
          />
        </div>

        <div className=" flex justify-between items-center my-5 w-full font-birthstone sm:text-xl text-sm">
          <label htmlFor="passsword">password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            className="w-4/6 focus:outline-none focus:border-gray-100 rounded-md border border-gray-300 "
          />
        </div>

        <button
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
