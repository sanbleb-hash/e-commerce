import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Store } from '../context.store';
import { FaTimes } from 'react-icons/fa';
import axios from 'axios';

const CartScreen = () => {
  const { id } = useParams();
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  const updateCartHandler = async (item, quantity) => {
    const { data } = await axios.get(`/api/products/${id}`);
    if (data.countInStock < quantity) {
      window.alert('sory we are out of stock');
      return;
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...item, quantity } });
  };

  const removeItemHandler = (item) => {
    dispatch({ type: 'CART_REMOVE_ITEM', payload: item });
    console.log('about to remove');
  };

  return (
    <section className="w-screen min-h-[70vh] bg-gray-100 pt-20 ">
      <div className="w-[80%] mx-auto ">
        <h1 className="text-center text-3xl text-gray-700 "> shopping cart</h1>
        <article>
          {cartItems.length === 0 ? (
            <div className="text-gray-700 text-center my-auto text-xl">
              your cart is empty{' '}
              <Link to="/">
                <span className="text-gray-600 "> go back shopping</span>
              </Link>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-cente md:items-start md:grid grid-cols-3  ">
              <div className="md:col-span-2 flex  w-full  mt-3 flex-col">
                {cartItems.map((item) => (
                  <div className="flex py-2 px-6 items-start bg-gray-400 justify-between mt-3  ">
                    <div key={item._id} className="h-full w-[110px]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full"
                      />
                    </div>
                    <span>{item.name}</span>
                    <span>
                      {item.countInStock > 0 && (
                        <span className="py-2">
                          QTY :
                          <select
                            value={item.quantity}
                            onChange={(e) =>
                              updateCartHandler(item, e.target.value)
                            }
                            className="w-10 bg-black text-white ml-2 focus:outline-none active:bg-black/70 hover:bg-black/75 "
                          >
                            {[...Array(item.countInStock).keys()].map((x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))}
                          </select>
                        </span>
                      )}
                    </span>
                    <span>$ : {item.price}</span>
                    <span
                      className="text-xl text-gray-700 hover:text-gray-500 border-2 border-white  "
                      onClick={() => removeItemHandler(item)}
                    >
                      <FaTimes />
                    </span>
                  </div>
                ))}
              </div>
              <div className="bg-gray-300 w-full ml-6 mt-8 shadow-xl border border-gray-100 ">
                <div className="w-[70%] mx-auto  h-[150px] text-gray-700 capitalize flex flex-col items-start justify-between  my-4">
                  <span>
                    total items :{' '}
                    {cartItems.reduce((a, c) => a + c.quantity, 0)} items
                  </span>
                  <span>
                    total price :$ {''}
                    {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
                  </span>
                  <button
                    className="border-gray-100 bg-yellow-600 w-full py-2 font-semibold hover:bg-opacity-80
                    transition-all ease-out delay-75
                  active:scale-x-105 text-gray-700 border-2 bg-transparent "
                  >
                    check out
                  </button>
                </div>
              </div>
            </div>
          )}
        </article>
      </div>
    </section>
  );
};

export default CartScreen;
