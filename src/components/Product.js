import React, { useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {BsBagPlus, BsEyeFill, BsFillStarFill} from 'react-icons/bs'
import { RiShoppingBasket2Line } from "react-icons/ri";
//  import cart context
import {CartContext} from '../contexts/CartContext';
import './style.css'
import { dataProduct } from '../contexts/dataProduct';
import { motion } from 'framer-motion';
import Aos from 'aos'
import "aos/dist/aos.css"
import Rating from '@mui/material/Rating';

const VND = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
});

function Product({ c }) {
  const { addToCart } = useContext(CartContext);

  return (
    <motion.div
    layout
    animate
    >
      <div className="mx-auto my-2 w-[300px] card bg-[#FCF9F4] rounded-lg hover:shadow-3xl transition duration-300">
        <div className=" h-[300px] md-4 relative overflow-hidden group border-b">
          <Link
            to={`/shop/${c.id}`}
            className=" text-4xl flex justify-center items-center text-secondary drop-shadow-xl"
          >
            <div className="w-full h-full flex justify-center items-center bg-white rounded-md">
              <div className="w-full cursor-pointer">
                <img
                  className="  transition duration-300 rounded-t-lg "
                  src={c.src[0]}
                  alt=""
                />
              </div>
            </div>
          </Link>
        </div>
        <div className="h-[120px] w-[90%] flex flex-col justify-evenly  m-auto">
          <Link to={`/shop/${c.id}`} className="w-fit" title={c.name}>
            <h1 className=" text_underline text-lg">
              {c.name.length < 25 ? `${c.name}` : `${c.name.substring(0, 25)}...`}
            </h1>
          </Link>
          <div className="flex justify-between items-center w-full ">
            <div className="flex flex-col items-center">
              <h1 className=" text-secondary">{VND.format(c.price)}</h1>
              <div className="flex items-center gap-3">
                <div className="flex text-secondary text-sm">
                  <Rating
                    name="size-small"
                    precision={0.5}
                    value={c.rating}
                    size="small"
                    readOnly
                  />
                </div>
              </div>
            </div>
            <button
              onClick={() => addToCart(c, c.id)}
              className="flex"
            >
              <div className="flex justify-center items-center bg-white text-secondary hover:text-white hover:bg-nau transition duration-300 shadow-3xl w-12 h-12 rounded-lg">
                <RiShoppingBasket2Line className=" text-2xl" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Product;
