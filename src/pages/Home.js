import React, { useContext, useState} from 'react';
//import product context
import Product from '../components/Product'
import Hero from '../components/Hero'
import IntroTeacher from '../components/IntroTeacher';
import Carousel from '../components/Carousel';
import Stats from '../components/Stats';
import OurTeam from '../components/OurTeam';
import Sectionservice from '../components/sectionservice';
import { dataProduct } from '../contexts/dataProduct';
import { motion } from 'framer-motion'

const getRandomObject = (array) => {
  const randomObject = array[Math.floor(Math.random() * array.length)];
  return randomObject;
};

const Home = () => {
  const [randomData, setRandomData] = useState(() => getRandomObject(dataProduct));

  
  return <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          >
            <Hero />
            <Sectionservice/>
            <Stats/>
            <OurTeam/>
            <Carousel/>
            <IntroTeacher/>
            <section className='py-20'>
              <div className='container mx-auto'>
                <h1>{randomData.id}</h1>
                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
                  {/* {filteredProducts.map(product => {
                    return (
                      <Product product={product} key={product.id}/>
                    )
                  })} */}
                  {/* {randomData.map((product) => {
                    return (
                      <Product product={product} key={product.id}/>
                    )
                    })} */}
                </div>
              </div>
            </section>
          </motion.div>
};

export default Home;
