import React, { useEffect, useState } from 'react';

import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

const DetailPage = () => {
  const [product, setProduct] = useState({});

  const history = useHistory();
  const { id } = useParams();
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${id}`);
      setProduct(data);
    };
    fetchProduct();
  }, []);

  if (!product) {
    return (
      <div className="text-center text-2xl text-gray-600 pt-28 min-h-[80vh]  ">
        sorry product not available
        <p
          className="text-green-300 underline hover:no-underline hover:text-green-500 cursor-pointer pl-4"
          onClick={() => history.goBack()}
        >
          go back to shop
        </p>
      </div>
    );
  }

  return (
    <section className="pt-16 min-h-[90vh] w-screen bg-gray-300">
      <article className="w-[90%] h-full mx-auto border py-12 border-gray-400 shadow-xl overflow-y-hidden ">
        <p
          className="text-blue-400 underline hover:no-underline hover:text-blue-500 pl-4"
          onClick={() => history.goBack()}
        >
          go back to shop
        </p>

        {
          <div className="flex flex-col md:flex-row w-9/12 h-full bg-gray-300 mx-auto my-10 ">
            <div className="w-full md:w-5/12 h-[340px] md:h-full border-gray-400 border shadow-xl rounded-lg mb-3 md:mb-0  ">
              <img
                src={product?.image}
                alt={product?.name}
                className="h-full w-full rounded-lg"
              />
            </div>
            <div className="flex items-start justify- mt-4 md:mt-0">
              <div
                className="flex flex-col border-l-2 border-gray-400 ml-6 pl-4 pt-7 font-medium 
            text-gray-700 capitalize italic  "
              >
                <h1 className="font-Italianno text-2xl font-semibold">
                  category: {product?.name}
                </h1>
                <h3>brand: {product?.brand}</h3>
                <p>{product?.description}</p>
                <p>
                  rating (<span> {product?.rating}stars</span>){' '}
                  <span>{product?.numReviews} reviews</span>
                </p>
              </div>
              <div
                className="flex flex-col border-l-2 border-gray-400 ml-6 pl-4 pt-7 font-medium 
            text-gray-700 capitalize italic "
              >
                <span>
                  <span>status : </span>
                  <span>
                    {product?.countInStock > 0 ? (
                      <span className="text-green-600 inline-block">
                        {' '}
                        in stock
                      </span>
                    ) : (
                      <span className="text-red-200 inline-block">
                        out of stock
                      </span>
                    )}
                  </span>
                </span>
                <span>
                  <span>price : </span>
                  <span>$ {product?.price}</span>
                </span>
                <button
                  className="block bg-blue-400 text-white mt-3 rounded-sm active:hover:bg-blue-600 active:scale-105 
              hover:bg-blue-600 transition-all delay-75"
                >
                  add to cart
                </button>
              </div>
            </div>
          </div>
        }
      </article>
    </section>
  );
};

export default DetailPage;
