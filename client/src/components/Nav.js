import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';
import SideBar from './SideBar';
import { useContext } from 'react';
import { Store } from '../context.store';
import Cookies from 'js-cookie';

const Nav = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
    userInfo,
  } = state;
  const [sideBar, setSideBar] = useState(false);
  const [popup, setPopup] = useState(false);
  const handleLogout = () => {
    dispatch({ type: ' USER_LOGOUT' });
    Cookies.remove('userInfo');
    Cookies.remove('cartItems');
    history.push('/');
    setPopup(false);
  };
  return (
    <nav className="w-screen h-[10vh] bg-black/90 text-white text-xl fixed z-50">
      <div className="flex items-center justify-between w-[80vw] h-full mx-auto capitalize font-zen   ">
        {sideBar && <SideBar sideBar={sideBar} setSideBar={setSideBar} />}
        <h1 className="hover:scale-110 hover:italic font-semibold hover:text-gray-200 transition-all delay-75 ease-in-out">
          <Link to="/">Nino multmedia</Link>
        </h1>
        <ul className="md:flex items-center  h-full hidden  ">
          <li
            className=" text-lg hover:scale-110 hover:italic hover:text-gray-200 transition-all delay-75 ease-in-out px-3 relative "
            onClick={() => setPopup(!popup)}
          >
            <Link to="login">
              {userInfo ? (
                <button>
                  {userInfo.name}{' '}
                  <IoMdArrowDropdown className="  text-center inline " />
                  {popup && (
                    <div className=" absolute top-8 left-0 right-0 w-[100px] h-[100px] bg-white  text-gray-600 shadow-2xl border border-gray-400 flex flex-col items-center justify-between text-xl py-5 ">
                      <span>profile</span>
                      <span onClick={handleLogout}>log out</span>
                    </div>
                  )}
                </button>
              ) : (
                'login'
              )}
            </Link>
          </li>

          <li className=" text-lg hover:scale-110 hover:italic hover:text-gray-200 transition-all delay-75 ease-in-out relative">
            <Link to="/cart">
              {' '}
              cart
              {cartItems.length > 0 ? (
                <span className="absolute -top-2 -right-3 text-sm  bg-gray-600 text-white rounded-full px-2">
                  {cartItems.length}
                </span>
              ) : (
                ''
              )}
            </Link>
          </li>
        </ul>
        <span className="md:hidden cursor-pointer text-2xl transition-all delay-75 ">
          {sideBar ? (
            <FaTimes onClick={() => setSideBar(false)} />
          ) : (
            <FaBars onClick={() => setSideBar(!sideBar)} />
          )}
        </span>
      </div>
    </nav>
  );
};

export default Nav;
