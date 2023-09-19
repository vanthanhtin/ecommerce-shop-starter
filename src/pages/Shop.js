import React, { useContext} from 'react'
import Product from '../components/Product'
import './style.css'
import { motion } from 'framer-motion'
import infobox1 from '../img/groomingtool.png'
import infobox2 from '../img/infobox-img-2-124x135.png'
import infobox3 from '../img/infobox-img-1-116x135.png'
import infobox4 from '../img/infobox-img-3-118x135.png'
import {Button} from '@material-tailwind/react'
import tongdo1 from '../img/product/tongdo1.png'
import keothangchonrynonebg from '../img/product/keothangchonrynonebg.png'


import {CartContext, } from '../contexts/CartContext';
import './style.css'
import { dataProduct } from '../contexts/dataProduct';




const VND = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
});

const FilterNavText = ['food', 'ao', 'tools'];


const Shop =() => {
    const [filter, setFilter] = React.useState('all');
    const [content, setContent] = React.useState(dataProduct);
    const [filterContent, setFilterContent] = React.useState([]);

    React.useEffect(() => {
        FilterChange();
    }, [filter]);
    function FilterChange() {
        switch(filter) {
        case 'food':
            setFilterContent(content.filter(f => f.categories === filter));
            break;
        case 'ao':
            setFilterContent(content.filter(f => f.categories === filter));
            break;
        case 'tools':
            setFilterContent(content.filter(f => f.categories === filter));
            break;
        default:
            setFilterContent(content);
            break;
        }
    }
    
    
    return(
    <motion.div 
    className=' mt-20'
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 50 }}>
        <div class="container mx-auto py-9 md:py-12 px-4 md:px-6">
            <div class="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
                <div class="flex flex-col md:flex-row items-strech justify-between bg-[#DAC7C1] dark:bg-gray-800 py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12 rounded-lg">
                    <div class="flex flex-col justify-center md:w-1/2">
                        <p className='text-sm lg:text-md text-secondary font-medium'>CHUYÊN NGHIỆP</p>
                        <h1 class="text-3xl lg:text-3xl font-semibold dark:text-white">Khoá học grooming Level C</h1>
                        <p class="text-base lg:text-xl dark:text-white mt-2">Ưu đãi tặng bộ dụng cụ lên tới <span class="font-bold">5.000.000₫</span></p>
                        <Button className=" text-sm w-[140px] right-0 mr-1 mt-4 items-center justify-center rounded-lg bg-secondary text-white font-bold hover:bg-nau transition-all hover:shadow-3xl">Đăng ký</Button>
                    </div>
                    <div class="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
                        <img src="https://i.ibb.co/J2BtZdg/Rectangle-56-1.png" alt="" class="" />
                    </div>
                </div>
                <div class=" md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 h-auto flex flex-col justify-between">
                    <div class=" cursor-pointer flex justify-between bg-[#ACBDCF] dark:bg-gray-800 mb-5 py-6 px-6 md:py-0 md:px-4 lg:px-6 relative rounded-lg" >
                        <div class="flex flex-col w-[75%] justify-center my-5">
                            <p className='text-sm md:text-xs lg:text-md text-secondary font-medium'>BÁN CHẠY</p>
                            <h1 class="text-3xl md:text-3xl lg:text-3xl font-semibold dark:text-white">Kéo chonry</h1>
                            <p class="text-base lg:text-xl dark:text-white">Chỉ từ <span class="font-bold">1.200.000₫</span></p>
                        </div>
                        <div class="flex justify-end w-[25%] items-center md:bottom-4 md:right-4 lg:bottom-0 lg:right-0">
                            <img src={keothangchonrynonebg} alt="" class="md:w-16 lg:w-full " />
                        </div>
                    </div>

                    <div class=" cursor-pointer flex justify-between bg-[#E4C9A8] dark:bg-gray-800 py-6 px-6 md:py-0 md:px-4 lg:px-6 relative rounded-lg">
                        <div class="flex flex-col w-[75%] justify-center my-5">
                            <p className='text-sm md:text-xs lg:text-md text-secondary font-medium'>SẢN PHẨM MỚI</p>
                            <h1 class="text-3xl md:text-3xl lg:text-3xl font-semibold dark:text-white">Tông đơ điện</h1>
                            <p class="text-base lg:text-xl dark:text-white">Chỉ từ <span class="font-bold">2.990.000₫</span></p>
                        </div>
                        <div class="flex justify-end w-[25%] items-center md:bottom-4 md:right-4 lg:bottom-0 lg:right-0">
                            <img src={tongdo1} alt="" class="md:w-16 lg:w-full " />
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
            <div className="container mx-auto">
                <FilterNav setFilter={setFilter} FilterNavText={FilterNavText} />
                <FilterContent content={filterContent} />
            </div>
    </motion.div>
    );
}




function FilterNavItem({FilterNavText, setFilter}) {
  
    function handleChange(e) {
        const status = e.target.id  ;
        setFilter(status);
    }
    
    return (
      <div>
        <div className=" mx-auto">
          <div className=" flex flex-col">
            <div className="w-full list-category font-medium">

              <div 
                className="group w-full cursor-pointer hover:-translate-y-3 transition duration-300 flex bg-white shadow-3xl rounded-lg"
                id="tools"
                onClick={handleChange}>
                    <img src={infobox4} className=" w-36 rounded-xl" id="all" onClick={handleChange}></img>
                    <div className=" flex flex-col justify-center" id="all" onClick={handleChange}>
                        <h1 className=" text-lg pl-3" id="all" onClick={handleChange}>Tất cả sản phẩm</h1>
                        <p className=" text-sm pl-3 pt-2" id="all" onClick={handleChange}>
                            Odio eumod lacinia quis risus. Dolor morbi non ornare.
                        </p>
                    </div>
              </div>
              <div 
                className="group w-full cursor-pointer hover:-translate-y-3 transition duration-300 flex bg-white shadow-3xl rounded-lg"
                id="tools"
                onClick={handleChange}>
                    <img src={infobox1} className=" w-36 rounded-xl" id="tools" onClick={handleChange}></img>
                    <div className=" flex flex-col justify-center" id="tools" onClick={handleChange}>
                        <h1 className=" text-lg pl-3" id="tools" onClick={handleChange}>Grooming tools</h1>
                        <p className=" text-sm pl-3 pt-2" id="tools" onClick={handleChange}>
                            Odio eumod lacinia quis risus. Dolor morbi non ornare.
                        </p>
                    </div>
              </div>
              <div
                id="ao"
                onClick={handleChange} 
                className="group  w-full cursor-pointer hover:-translate-y-3 transition duration-300 flex bg-white shadow-3xl rounded-lg">
                <img src={infobox2} className=" w-36 rounded-xl" id="ao" onClick={handleChange}/>
                <div className=" flex flex-col justify-center" id="ao" onClick={handleChange}>
                  <h1 className=" text-lg pl-3"  id="ao" onClick={handleChange}>Clothes for Pets</h1>
                  <p className=" text-sm pl-3 pt-2" id="ao" onClick={handleChange}>
                    Pet health and wellness that’s one step ahead.
                  </p>
                </div>
              </div>
              <div
                id="food"
                onClick={handleChange} 
                className="group w-full cursor-pointer hover:-translate-y-3 transition duration-300 flex bg-white shadow-3xl rounded-lg">
                <img src={infobox3} className=" w-36 rounded-xl"  id="food" onClick={handleChange}/>
                <div className=" flex flex-col justify-center" id="food" onClick={handleChange}>
                  <h1 className=" text-lg pl-3" id="food" onClick={handleChange}>Dogs Food & Toy</h1>
                  <p className=" text-sm pl-3 pt-2" id="food" onClick={handleChange}>
                    Risus ultricies tristique nulla aliquet enim tortor urna.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
    
}

function FilterContent({content}) {
  const { addToCart } = useContext(CartContext);
    return (
        <div className="mx-auto container min-h-screen py-8">
            <motion.div layout className=" list-product">
              {/* {content.map((c) =>   
                (<motion.div layout className="mx-auto my-2 w-[300px] card bg-[#FCF9F4] rounded-lg hover:shadow-3xl opacity-1 transition-all">
                  <div className=" h-[300px] md-4 relative overflow-hidden group border-b">
                    <Link
                      to={`/shop/${c.id}`}
                      className=" text-4xl flex justify-center items-center text-secondary drop-shadow-xl"
                    >
                      <div className="w-full h-full flex justify-center items-center bg-white rounded-md">
                        <div className="w-full cursor-pointer">
                          <img
                            className="  transition rounded-t-lg "
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
                        {c.name.length < 25
                          ? `${c.name}`
                          : `${c.name.substring(0, 25)}...`}
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
                        onClick={()=> addToCart( c, c.id)}  
                        className="flex"
                      >
                        <div className="flex justify-center items-center bg-white text-secondary hover:text-white hover:bg-nau transition-all shadow-3xl w-12 h-12 rounded-lg">
                          <RiShoppingBasket2Line className=" text-2xl" />
                        </div>
                      </button>
                    </div>
                  </div>
                </motion.div>)
              
              )} */}
              {content.map((c) =>{return <Product key={c.id} c={c}/>} )}
            </motion.div>
        </div>
    );
}


  
function FilterNav({FilterNavText, setFilter}) {
    return(
      <nav className="navbar navbar-light">
        <ul className="nav">
          <FilterNavItem setFilter={setFilter}  />
        </ul>
      </nav>
    )
}

export default Shop