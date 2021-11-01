import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const HomeScreen = () => {
  const history = useHistory();

  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const { data } = await axios.get('/api/products');
    setProducts(data);
  }, []);

  const addToCartHandler = () => {
    console.log('well ');
  };

  return (
    <main className=" w-full h-full mx-auto bg-gray-300/20 py-5 px-auto ">
      <section className=" flex-col sm:flex-row pt-14 px-5 flex  flex-wrap gap-4 mx-auto items-center justify-center     ">
        {products.map((product) => (
          <div
            key={product.name}
            className=" min-w-[350px] sm:max-w-[250px] md:min-w-[150px] min-h-[150px]  border border-gray-300 bg- shadow-md min-m  rounded-md mx-auto      "
          >
            {
              <div className="flex flex-col w-full h-full ">
                <div
                  className=" h-3/4 w-full relative bg-gray-400 rounded-t-md"
                  onClick={() => history.push(`/products/${product._id}`)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className=" w-full h-full  rounded-t-md"
                  />
                </div>
                <div className="flex flex-col border-gray-500 text-gray-500 p-3  text-xl font-semibold bg-gray-300 ">
                  <h5>{product.name}</h5>
                  <div className="flex justify-between items-center">
                    <h5>$ {product.price}</h5>
                    <button
                      className="hover:border-gray-400 px-3 rounded-md shadow-lg
                    hover:bg-blue-200 transition-all delay-100 ease-in-out hover:text-opacity-5 border"
                      onClick={addToCartHandler}
                    >
                      add to cart
                    </button>
                  </div>
                </div>
              </div>
            }
          </div>
        ))}
      </section>
    </main>
  );
};

export default HomeScreen;
