import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";

const Hero = () => {
    const breakpoints = {
        320: {
            slidesPerView: 1,
      
          },
          
          1024: {
            slidesPerView: 3,
            
          }
    }
  return (
    <div className="p-4 2xl:px-40 2xl:py-10">
      <div className="sm:flex items-center">
        <div className="lg:w-1/3 sm:w-1/2 w-full p-2 pr-4">
          <div className="text-4xl text-center sm:text-left font-semibold">The Tiles House</div>
          <img
            src="https://thetileshouse.com/wp-content/uploads/2022/06/brush.png"
            alt=""
            className="m-auto sm:m-0"
          />
          <p className="font-bold text-lg py-2">
            Step Into Style with The Tiles House – Buy Tiles Online Today!
          </p>
          <p className="py-2">
            Welcome to The Tiles House, the ultimate online platform for all
            your tile shopping needs. With a wide range of tiles in different
            styles, colors, and sizes, we cater to every customer’s unique
            tastes and preferences. Our online tile shop offers a convenient and
            easy way for you to shop. You can browse through our collection,
            compare prices, and place an order with just a few clicks.
          </p>
          <div className="py-3">
            <button className="bg-orange-300 text-white py-3 px-8 flex items-center gap-2 m-auto xl:m-0">
              Shop Now <FaCartArrowDown />
            </button>
          </div>
        </div>

        <div className="lg:w-2/3 w-1/2 m-auto">
          <Swiper
          breakpoints={breakpoints}
            spaceBetween={10}
            loop={true}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          
            
          >
            <SwiperSlide className=" ">
              <div className="relative w-fit m-auto">
                <Link className="m-auto">
                  
                  <img
                    src="https://thetileshouse.com/wp-content/uploads/2022/06/slider3.png"
                    alt=""
                   
                  />
                  <p className="absolute z-50  bottom-5 left-5 bg-white/30 py-1 px-4 font-semibold">
                    Floor Tiles
                  </p>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="relative">
                <Link>
                  
                  <img
                    src="https://thetileshouse.com/wp-content/uploads/2022/06/slider2.png"
                    alt=""
                  />
                  <p className="absolute z-50  bottom-5 left-5 bg-white/30 py-1 px-4 font-semibold">
                    Kitchen Tiles
                  </p>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="relative">
                <Link>
                  
                  <img
                    src="https://thetileshouse.com/wp-content/uploads/2022/06/slider4.png"
                    alt=""
                  />
                  <p className="absolute z-50  bottom-5 left-5 bg-white/30 py-1 px-4 font-semibold">
                    Wall Tiles
                  </p>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="relative">
                <Link>
                  
                  <img
                    src="https://thetileshouse.com/wp-content/uploads/2022/06/slider1.png"
                    alt=""
                  />
                  <p className="absolute z-50  bottom-5 left-5 bg-white/30 py-1 px-4 font-semibold">
                    Bathroom Tiles
                  </p>
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Hero;
