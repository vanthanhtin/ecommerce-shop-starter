import React from 'react'
import {BsDot} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import img1 from '../img/img-1.jpg'
import avatacamtien from '../img/avatacamtien.jpg'
import chuky from '../img/chuky.png'
import img3 from '../img/img-section-3.jpg'
import ProgressBar from 'react-animated-progress-bar';
import { motion } from "framer-motion";
import './style.css'


const Contact = () => {
  return (
    <motion.div
      className=" mt-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
    >
      <div className="  w-screen">
        <div className=" bgContact">
          <div className=" flex flex-col py-32 justify-center items-center w-8/12 mx-auto  cursor-default">
            <p className=" text-white text-4xl lg:text-6xl font-fontHead py-6">
              About Us
            </p>
            <div className=" text-sm lg:text-base flex justify-center items-center font-fontHead bg-white px-3 py-0.5 rounded-lg shadow-3xl">
              <Link
                to={"/"}
                className=" text-secondary/80 hover:text-secondary transition duration-300"
              >
                TRANG CHỦ
              </Link>
              <p className="  text-secondary text-3xl flex justify-center items-center">
                <BsDot />
              </p>
              <p className=" text-secondary/80 hover:text-secondary transition duration-300">
                VỀ CHÚNG TÔI
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <section className=" container lg:flex justify-center items-center mx-auto py-40 space-x-10">
          <div className=" flex justify-center items-center lg:w-1/2">
            <img src={img1} className=" w-4/6" />
          </div>
          <div className=" flex flex-col lg:w-1/2 lg:pl-20 py-20 ">
            <div className="text-secondary w-fit flex justify-center items-center font-fontHead bg-white px-4 py-1 rounded-lg shadow-3xl">
              <p>ABOUT US</p>
            </div>
            <h1 className="  leading-normal font-fontHead text-2xl lg:text-4xl xl:text-5xl py-5">
              Happy to Welcome You Here in Cengrooming
            </h1>
            <p className=" leading-7 font-normal">
              Semper auctor neque vitae tempus pellentesque. Blandit maecenas
              volutpat blandit aliquam etiam erat velit scelerisque. Elit
              pellentesque habitant tristique senectus et. Pellentesque
              adipiscing commodo. Pretium aenean pharetra magna ac placerat
              vestibulum.
            </p>
            <div className="flex pt-6 items-center">
              <img src={avatacamtien} className=" w-20 h-20 rounded-[50%] " />
              <div className=" flex flex-col px-6 space-y-2">
                <h1 className=" font-fontHead text-2xl">DT.Cẩm Tiên</h1>
                <p className=" text-secondary font-bold">COMPANY OWNER</p>
              </div>
              <img
                src={chuky}
                className="h-20 w-auto origin-center -rotate-12"
              />
            </div>
          </div>
        </section>
      </div>

      <div className=" bg-section3 bg-[#FCF9F4]">
        <section className="  container lg:flex justify-center items-center mx-auto py-40 space-x-10">
          <div className=" flex flex-col lg:w-1/2 lg:pl-20 py-20 ">
            <div className="text-secondary w-fit flex justify-center items-center font-fontHead bg-white px-4 py-1 rounded-lg shadow-3xl">
              <p>OUR SKILLS</p>
            </div>
            <h1 className=" font-fontHead text-2xl lg:text-4xl xl:text-5xl py-5">
              Few Resons Why You Should Choose Us
            </h1>
            <p className=" leading-7 font-normal">
              Pharetra pharetra massa massa ultricies mi quis hendrerit. Mauris
              rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.
              Massa enim dui nunc mattis. Lacus vestibulum sed arcu non.
            </p>
            <div className="flex flex-col pt-6 items-center">
              <div className=" font-fontHead pt-4">
                <h1 className=" font-fontHead">Pets Grooming</h1>
                <ProgressBar
                  width="500px"
                  height="17px"
                  fontSize="15px"
                  rect
                  fontColor="gray"
                  percentage="90"
                  rectPadding="2px"
                  rectBorderRadius="20px"
                  trackPathColor="white"
                  bgColor="secondary"
                  trackBorderColor="white"
                />
              </div>
              <div className=" font-fontHead pt-4">
                <h1 className=" font-fontHead">Veterinary Care</h1>
                <ProgressBar
                  width="500px"
                  height="17px"
                  fontSize="15px"
                  rect
                  fontColor="gray"
                  percentage="55"
                  rectPadding="2px"
                  rectBorderRadius="20px"
                  trackPathColor="white"
                  bgColor="secondary"
                  trackBorderColor="white"
                />
              </div>
              <div className=" font-fontHead pt-4">
                <h1 className=" font-fontHead">Pets Training</h1>
                <ProgressBar
                  width="500px"
                  height="17px"
                  fontSize="15px"
                  rect
                  fontColor="gray"
                  percentage="82"
                  rectPadding="2px"
                  rectBorderRadius="20px"
                  trackPathColor="white"
                  bgColor="secondary"
                  trackBorderColor="white"
                />
              </div>
            </div>
          </div>
          <div className=" flex justify-center items-center lg:w-1/2">
            <img src={img3} className=" w-4/6" />
          </div>
        </section>
      </div>

      {/* <div className=" flex mx-auto">
        <div className="relative inline-flex mx-auto my-10 group">
          <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
          <a
            href="*"
            title=""
            className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition duration-300 duration-200 bg-secondary font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button"
          >
            Liên hệ ngay
          </a>
        </div>
      </div> */}

      {/* <!-- component --> */}
      <div>
        <div className="bgimg h-[650px] bg-[#FCF9F4] flex justify-center items-center">
          <form class="w-full relative max-w-[40rem] mt-[100px ] m-auto p-[50px] bg-white rounded-xl shadow-2xl">
            <div class="flex gap-3 w-full justify-between mb-6 group">
              <div class="relative z-0 w-2/3 group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-nau bg-transparent rounded-lg border-1 border-nau/20 appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_email"
                  class="absolute bg-white text-sm text-nau  duration-300 transform -translate-y-4 scale-75 top-2 -z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-5 left-1"
                >
                  Name
                </label>
              </div>
              <div class="relative z-0 w-2/3  group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-nau bg-transparent rounded-lg border-1 border-nau/20 appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_email"
                  class="absolute bg-white text-sm text-nau  duration-300 transform -translate-y-4 scale-75 top-2 -z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-5 left-1"
                >
                  Phone number *
                </label>
              </div>
            </div>

            <div class="relative z-0 w-full mb-6 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-nau bg-transparent rounded-lg border-1 border-nau/20 appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
                placeholder=" "
                required
              />
              <label
                for="floating_email"
                class="absolute bg-white text-sm text-nau  duration-300 transform -translate-y-4 scale-75 top-2 -z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-secondary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-5 left-1"
              >
                Email *
              </label>
            </div>

            <div class="flex flex-wrap w-full mb-6">
              <div class=" w-full px-4 py-2 bg-white border  text-nau rounded-lg border-nau/20 ">
                <label for="text" class="sr-only text-nau">
                  Your comment
                </label>
                <textarea
                  id="comment"
                  class="w-full px-0 text-sm text-nau bg-white border-0  focus:ring-0 "
                  placeholder="Write a comment..."
                  required
                ></textarea>
              </div>
            </div>

            <div class="md:flex md:items-center">
              <div class="md:w-1/3">
                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className=" text-white bg-secondary font-medium text-lg  rounded-lg cursor-pointer inline-flex items-center py-2 px-5 text-xs justify-center items-center "
                >
                  Gửi
                </motion.button>
              </div>
              <div class="md:w-2/3"></div>
            </div>
          </form>
        </div>
      </div>
      {/* <SimpleMap/> */}
    </motion.div>
  );
}

export default Contact