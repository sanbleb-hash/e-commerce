import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import SideBar from './SideBar';

const Nav = () => {
  const [sideBar, setSideBar] = useState(false);
  return (
    <nav className="w-screen h-[10vh] bg-black/90 text-white text-xl fixed z-50">
      <div className="flex items-center justify-between w-[80vw] h-full mx-auto capitalize font-zen   ">
        {sideBar && <SideBar sideBar={sideBar} setSideBar={setSideBar} />}
        <h1 className="hover:scale-110 hover:italic font-semibold hover:text-gray-200 transition-all delay-75 ease-in-out">
          <Link to="/">Nino multmedia</Link>
        </h1>
        <ul className="md:flex items-center  h-full hidden  ">
          <li className=" text-lg hover:scale-110 hover:italic hover:text-gray-200 transition-all delay-75 ease-in">
            <Link to="/">shop</Link>
          </li>
          <li className=" text-lg hover:scale-110 hover:italic hover:text-gray-200 transition-all delay-75 ease-in-out px-3">
            <Link to="login">login</Link>
          </li>
          <li className=" text-lg hover:scale-110 hover:italic hover:text-gray-200 transition-all delay-75 ease-in-out">
            <Link to="/cart">cart</Link>
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
