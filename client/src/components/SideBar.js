import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = ({ setSideBar, sideBar }) => {
  return (
    <div
      className="w-[100vw] h-screen bg-gray-700 tex absolute top-[10vh] left-0 z-30 bg-transparent/20"
      onClick={() => setSideBar(!sideBar)}
    >
      <div className="w-1/2 h-full  flex flex-col items-center justify-center bg-white bg-transparent/60 pb-14 ">
        <h3>
          <Link to="/">shop</Link>
        </h3>
        <h3 className="py-14">
          <Link to="/login">login</Link>
        </h3>
        <h3>
          <Link to="/cart">cart</Link>
        </h3>
      </div>
    </div>
  );
};

export default SideBar;
