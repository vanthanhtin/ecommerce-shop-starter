import React,  { useContext, useEffect, useState,useRef, Fragment } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { Dialog, Transition } from '@headlessui/react'

import Logo from '../img/logo.png'
import { Link } from 'react-router-dom';
import './style.css'
import { CartContext } from '../contexts/CartContext';
import { BsChevronDown } from 'react-icons/bs';
import {FiSearch} from 'react-icons/fi'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {
  Button,
  Drawer, 
  ThemeProvider 
} from "@material-tailwind/react";
import Sidebar from './sidebar/Sidebar';


const customTheme = {
  drawer: {
    defaultProps: {
      size: 300,
      overlay: true,
      placement: "left",
      overlayProps: undefined,
      dismiss: undefined,
      onClose: undefined,
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
    styles: {
      base: {
        drawer: {
          position: "fixed",
          zIndex: "z-[9999]",
          pointerEvents: "pointer-events-auto",
          backgroundColor: "none",
          boxSizing: "box-border",
          width: "w-[400px]",
          boxShadow: "none",
          
        },
        overlay: {
          position: "fixed",
          inset: "inset-0",
          width: "w-full",
          height: "h-full",
          pointerEvents: "pointer-events-auto",
          zIndex: "z-[9995]",
          backgroundColor: "bg-black",
          backgroundOpacity: "bg-opacity-40",
          backdropBlur: "backdrop-blur-sm",
          className:"space-x-0"
        },
      },
    },
  },
};


const Header = () => {
  //   header state
  const [isActive, setIsActive] = useState(false);
  const [open, setOpen] = useState(false)
  const [openRight, setOpenRight] = React.useState(false);
  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);
  //  event header
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY >60 ? setIsActive(true) : setIsActive(false);
    })
  })

  const {isOpen, setIsOpen} = useContext(SidebarContext);
  const {itemAmount} = useContext(CartContext)
  const [searchInput, setSearchInput] = useState(true);
    const [mdOptionsToggle, setMdOptionsToggle] = useState(true);
    const [showMenu, setShowMenu] = useState(false);                    //bg-transparant
  return (
    <header
      className={` ${
        isActive ? "bg-white shadow-xl " : " bg-white "
      } fixed  w-full z-[100] transition duration-300 `}
    >
      <div className="container max-w-none p-0 flex flex-col justify-between items-center h-full m-auto">
        {/* For md screen size */}
        <div
          id="md-searchbar"
          className={`${
            mdOptionsToggle ? "hidden" : "flex"
          } flex-row bg-white dark:bg-gray-900 lg:hidden py-5 px-6 items-center justify-between w-full font-fontHead`}
        >
          <div className="flex font-primary pr-5 items-center w-full space-x-3 text-nau dark:text-white">
            <form class="relative z-0 w-full group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                class="block px-2.5 pb-2 pt-3 w-full text-sm text-nau bg-transparent rounded-lg border-1 border-nau/20 appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
                placeholder=" "
                required
              />
              <label
                for="floating_email"
                class="absolute bg-white text-sm text-nau  duration-300 transform -translate-y-4 scale-75 top-2 -z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-5 left-1"
              >
                Tìm kiếm
              </label>
            </form>
          </div>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="float-right cursor-pointer relative right-3 hover:text-secondary p-[10px]"
          >
            {/* <BsBag className='text-2xl hover:text-secondary transition duration-300'/> */}
            <AiOutlineShoppingCart className="text-2xl hover:text-secondary  transition duration-300" />
            <div className="bg-red-500 absolute right-[2px] bottom-0 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
              {itemAmount}
            </div>
          </div>
        </div>
        {/* For md screen size */}
        {/* For large screens */}
        <div className="dark:bg-gray-900 md:px-6  py-2 w-full  font-fontHead">
          <div className="px-0 container mx-auto flex items-center justify-between ">
            <div className="h-fit logo h-14">
              <Link to={"/"} className=" h-fit ">
                <img src={Logo} className=" h-14" />
              </Link>
            </div>
            <ul className="hidden w-8/12 md:flex items-center xl:justify-center md:justify-start md:ml-5 lg:space-x-8 space-x-2">
              <li className="li1">
                <Link
                  to={"/"}
                  className="  text_underline hover:text-secondary  focus:text-secondary"
                >
                  Trang chủ
                </Link>
              </li>
              <li className="li2">
                <Link
                  to={"/shop"}
                  className="  text_underline  hover:text-secondary focus:text-secondary"
                >
                  Cửa hàng
                </Link>
              </li>
              <li className="li3">
                <div className="group py-[21px]">
                  <div className="flex justify-center items-center  hover:text-secondary focus:text-secondary ">
                    <Link
                      to={"/"}
                      className="  flex   transition duration-300  focus:text-secondary  focus:text-secondary"
                    >
                      Khoá học{" "}
                    </Link>
                    <BsChevronDown className="ml-1 mt-1 stroke-1 text-xs  hover:text-secondary group-hover:rotate-[-180deg] cursor-pointer  transition" />
                  </div>

                  <ul class="absolute w-max py-2 mt-[20px] hidden rounded-lg  bg-white mt-4 shadow-[0px_25px_60px_0px_rgba(0,0,0,0.3)] group-hover:block ring-1 ring-black ring-opacity-5 transition duration-300">
                    <li class="w-full items-start  hover:text-secondary transition duration-300 ">
                      <Link
                        class=" focus:text-secondary py-1 pl-4 pr-20 block whitespace-no-wrap hover:bg-gray-200  transition duration-300"
                        href="#"
                      >
                        Level C
                      </Link>
                    </li>
                    <li class=" w-full  hover:text-secondary transition duration-300  focus:text-secondary">
                      <Link
                        class="py-1 pl-4 pr-20 block whitespace-no-wrap hover:bg-gray-200  transition duration-300"
                        href="#"
                      >
                        Level B
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="li4">
                <Link
                  to={"/contact"}
                  className="  text_underline  hover:text-secondary"
                >
                  Liên hệ
                </Link>
              </li>
            </ul>

            <div className="justify-end flex items-center space-x-4 xl:space-x-8">
              <div className="hidden font-primary lg:flex items-center font-primary">
                <form class="relative z-0 group">
                  <input
                    type="email"
                    name="floating_email"
                    id="floating_email"
                    class="block px-2.5 pb-2 pt-3 w-full text-sm text-nau bg-transparent rounded-lg border-1 border-nau/20 appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_email"
                    class="absolute bg-white text-sm text-nau  duration-300 transform -translate-y-4 scale-75 top-2 -z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-5 left-1"
                  >
                    Tìm kiếm
                  </label>
                </form>
              </div>



              {/* ------------------gio hang-------------------- */}
              <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
                <div
                  onClick={openDrawerRight}
                  className="float-right cursor-pointer relative right-3 hover:text-secondary"
                >
                  <AiOutlineShoppingCart className=" text-3xl hover:text-secondary  transition duration-300" />
                  <div className="bg-secondary absolute right-[-5px] top-[-3px] bottom-0 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center  font-primary font-bold">
                    {itemAmount}
                  </div>
                </div>
                <ThemeProvider value={customTheme}>
                  <Drawer
                    placement="right"
                    size={360}
                    open={openRight}
                    onClose={closeDrawerRight}
                    className="ml-0 top-16"
                  >
                    <Sidebar />
                  </Drawer>
                </ThemeProvider>



              </div>
              <div className="flex lg:hidden">
                <button
                  aria-label="show options"
                  onClick={() => setMdOptionsToggle(!mdOptionsToggle)}
                  className="text-black dark:text-white dark:hover:text-gray-300 hidden md:flex 0"
                >
                  <svg
                    className="fill-stroke"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6H20"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 12H20"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 18H20"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  aria-label="open menu"
                  onClick={() => setShowMenu(true)}
                  className="text-black dark:text-white dark:hover:text-gray-300 md:hidden "
                >
                  <svg
                    className="fill-stroke"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6H20"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 12H20"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 18H20"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* For small screen */}
        <div
          id="mobile-menu"
          className={`${
            showMenu ? "flex" : "hidden"
          } absolute dark:bg-gray-900 z-10 inset-0 md:hidden bg-white flex-col h-screen w-full font-fontHead`}
        >
          <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4 p-4">
            <div className="flex items-center space-x-3 w-full">
              <div>
                <svg
                  className="fill-stroke text-gray-800 dark:text-white"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.9984 18.9999L14.6484 14.6499"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <form class="relative z-0 w-3/4 group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  class="block px-2.5 pb-2 pt-3 w-full text-sm text-nau bg-transparent rounded-lg border-1 border-nau/20 appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_email"
                  class="absolute font-primary bg-white text-sm text-nau  duration-300 transform -translate-y-4 scale-75 top-2 -z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-5 left-1"
                >
                  Tìm kiếm
                </label>
              </form>
            </div>
            <button
              onClick={() => setShowMenu(false)}
              aria-label="close menu"
              className=""
            >
              <svg
                className="fill-stroke text-gray-800 dark:text-white"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4L4 12"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 4L12 12"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 p-4">
            <ul className="flex flex-col space-y-6">
              <li>
                <Link
                  to={"/"}
                  className="  text_underline  focus:text-secondary"
                >
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link
                  to={"/shop"}
                  className="  text_underline focus:text-secondary "
                >
                  Cửa hàng
                </Link>
              </li>
              <li className="group">
                <div className="flex  items-center hover:text-secondary ">
                  <Link
                    to={"/"}
                    className=" flex  transition duration-300 focus:text-secondary "
                  >
                    Khoá học{" "}
                  </Link>
                  <BsChevronDown className="ml-1 mt-1 stroke-1  group-hover:rotate-[-90deg] transition duration-300" />
                </div>
                <ul class="absolute hidden rounded-lg text-black bg-white top-[182px] left-[117px] shadow-[0px_25px_60px_0px_rgba(0,0,0,0.3)] group-hover:block ring-1 ring-black ring-opacity-5 transition duration-300">
                  <li class="w-full items-start   ">
                    <Link
                      class=" py-2 pl-4 pr-20 block whitespace-no-wrap text_underline "
                      href="#"
                    >
                      Level C
                    </Link>
                  </li>
                  <li class=" w-full   ">
                    <Link
                      class="py-2 pl-4 pr-20 block whitespace-no-wrap text_underline "
                      href="#"
                    >
                      Level B
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  to={"/contact"}
                  className="  text_underline focus:text-secondary "
                >
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="float-right cursor-pointer relative hover:text-secondary p-4 w-fit"
          >
            <AiOutlineShoppingCart className="text-2xl hover:text-secondary  transition duration-300" />
            <div className="bg-red-500 absolute right-[7px] bottom-[7px] text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center font-primary ">
              {itemAmount}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
