import React from 'react'
import grooming from '../img/grooming.png'
import hotel from '../img/pet-hotel.png'
import academy from '../img/academy.png'
import petshop from '../img/pet-shop.png'
import paw from '../img/paw.png'
import './style.css'

const Sectionservice = () => {
    return (
    <div className=' my-8 container m-auto h-auto'>
        <div className='w-full grid lg:flex gap-5 lg:gap-5 xl:gap-16 font-medium'>
            <div className='cursor-pointer group hover:bg-nau hover:text-white hover:-translate-y-3 transition duration-300 flex flex-col px-6 py-12 bg-white shadow-3xl rounded-lg'>
                <img src={grooming} className=' w-16 h-16' />
                <div>
                    <h1 className=' text-2xl mt-3'>Pet Grooming</h1>
                    <p className='mt-7'>Sapien pellentesque habitant morbi tristique senectu dolor netus malesuada.</p>
                    <div className='flex mt-7 gap-3'>
                        <img src={paw} className=' w-5 h-5 rotate-45 group-hover:origin-center group-hover:-rotate-45 transition duration-300' />
                        <p className=' font-bold'>LEARN MORE</p>
                    </div>
                </div>
            </div>
            <div className='cursor-pointer group hover:bg-nau hover:text-white hover:-translate-y-3 transition duration-300 flex flex-col px-6 py-12 bg-white shadow-3xl rounded-lg'>
                <img src={academy} className=' w-16 h-16' />
                <div>
                    <h1 className=' text-2xl mt-3'>Pet Academy</h1>
                    <p className='mt-7'>Sapien pellentesque habitant morbi tristique senectu dolor netus malesuada.</p>
                    <div className='flex mt-7 gap-3'>
                        <img src={paw} className=' w-5 h-5 rotate-45 group-hover:origin-center group-hover:-rotate-45 transition duration-300' />
                        <p className=' font-bold'>LEARN MORE</p>
                    </div>
                </div>
            </div>
            <div className='cursor-pointer group hover:bg-nau hover:text-white hover:-translate-y-3 transition duration-300 flex flex-col px-6 py-12 bg-white shadow-3xl rounded-lg'>
                <img src={hotel} className=' w-16 h-16' />
                <div>
                    <h1 className=' text-2xl mt-3'>Pet Hotel</h1>
                    <p className='mt-7'>Sapien pellentesque habitant morbi tristique senectu dolor netus malesuada.</p>
                    <div className='flex mt-7 gap-3'>
                        <img src={paw} className=' w-5 h-5 rotate-45 group-hover:origin-center group-hover:-rotate-45 transition duration-300' />
                        <p className=' font-bold'>LEARN MORE</p>
                    </div>
                </div>
            </div>
            <div className='cursor-pointer group hover:bg-nau hover:text-white hover:-translate-y-3 transition duration-300 flex flex-col px-6 py-12 bg-white shadow-3xl rounded-lg'>
                <img src={petshop} className=' w-16 h-16' />
                <div>
                    <h1 className=' text-2xl mt-3'>Pet Shop</h1>
                    <p className='mt-7'>Sapien pellentesque habitant morbi tristique senectu dolor netus malesuada.</p>
                    <div className='flex mt-7 gap-3'>
                        <img src={paw} className=' w-5 h-5 rotate-45 group-hover:origin-center group-hover:-rotate-45 transition duration-300' />
                        <p className=' font-bold'>LEARN MORE</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Sectionservice