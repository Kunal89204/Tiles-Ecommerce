import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";

const Explore = () => {
  const breakpoints = {
    320: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 5,
    },
    800: {
      slidesPerView: 6,
    },
    1000: {
      slidesPerView: 7,
    },
    1536: {
      slidesPerView: 9,
    },
  };
  return (
    <div className="bg-yellow-50 py-10">
      <div className="text-center">
        <div className="text-2xl font-bold">
          Explore the Latest Home Tiles Design at The Tiles House
        </div>
        <div className="p-8 2xl:w-2/3 m-auto">
          <span className="text-orange-300"> The Tiles House</span> offers a
          wide range of home tiles design options to suit every taste and style.
          From classic to contemporary, our collection of wall tiles design is
          sure to impress. Whether you're renovating your kitchen, bathroom, or
          any other room in your home, we have the perfect new house tiles
          design to fit your needs.
        </div>
      </div>
      <div className="lg:px-40 px-10 py-6  2xl:w-10/12 m-auto">
        <Swiper
          spaceBetween={0}
          breakpoints={breakpoints}
          loop={true}
          slidesPerView={6}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="w-fit">
              <div className="w-40 rounded-full overflow-hidden group">
                <Link>
                  <img
                    src="https://images.tilemerchant.ie/media/catalog/category/Pattern_Tiles_1_1.jpg"
                    alt=""
                    className="group-hover:scale-125"
                  />
                </Link>
              </div>
              <p className="text-center">
                <Link>Pattern Tiles</Link>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-fit">
              <div className="w-40 rounded-full overflow-hidden group">
                <Link>
                  <img
                    src="https://images.tilemerchant.ie/media/catalog/category/Hexagon_Tiles_2.jpg"
                    alt=""
                    className="group-hover:scale-125"
                  />
                </Link>
              </div>
              <p className="text-center">
                <Link>Hexagaon Tiles</Link>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-fit">
              <div className="w-40 rounded-full overflow-hidden group">
                <Link>
                  <img
                    src="https://images.tilemerchant.ie/media/catalog/category/Artificial_Grass_1.jpg"
                    alt=""
                    className="group-hover:scale-125"
                  />
                </Link>
              </div>
              <p className="text-center">
                <Link>Artificial Grass</Link>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-fit">
              <div className="w-40 rounded-full overflow-hidden group">
                <Link>
                  <img
                    src="https://images.tilemerchant.ie/media/catalog/category/Decking_1.jpg"
                    alt=""
                    className="group-hover:scale-125"
                  />
                </Link>
              </div>
              <p className="text-center">
                <Link>Decking</Link>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-fit">
              <div className="w-40 rounded-full overflow-hidden group">
                <Link>
                  <img
                    src="https://images.tilemerchant.ie/media/catalog/category/wall_panelling_ireland_tongue_and_groove_paneling_dublin.jpg"
                    alt=""
                    className="group-hover:scale-125"
                  />
                </Link>
              </div>
              <p className="text-center">
                <Link>Slat Wall Panelling</Link>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-fit">
              <div className="w-40 rounded-full overflow-hidden group">
                <Link>
                  <img
                    src="https://images.tilemerchant.ie/media/catalog/category/Limestone_Paving_Slabs_1.jpg"
                    alt=""
                    className="group-hover:scale-125"
                  />
                </Link>
              </div>
              <p className="text-center">
                <Link>Limestone Paving Slabs</Link>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-fit">
              <div className="w-40 rounded-full overflow-hidden group">
                <Link>
                  <img
                    src="https://images.tilemerchant.ie/media/catalog/category/Laminate_Flooring_1.jpg"
                    alt=""
                    className="group-hover:scale-125"
                  />
                </Link>
              </div>
              <p className="text-center">
                <Link>Laminate Flooring</Link>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-fit">
              <div className="w-40 rounded-full overflow-hidden group">
                <Link>
                  <img
                    src="https://images.tilemerchant.ie/media/catalog/category/Outdoor_Tiles_1.jpg"
                    alt=""
                    className="group-hover:scale-125"
                  />
                </Link>
              </div>
              <p className="text-center">
                <Link>Outdoor Flooring</Link>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-fit">
              <div className="w-40 rounded-full overflow-hidden group">
                <Link>
                  <img
                    src="https://images.tilemerchant.ie/media/catalog/category/Mosaics_1.jpg"
                    alt=""
                    className="group-hover:scale-125"
                  />
                </Link>
              </div>
              <p className="text-center">
                <Link>Mosaics</Link>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-fit">
              <div className="w-40 rounded-full overflow-hidden group">
                <Link>
                  <img
                    src="https://images.tilemerchant.ie/media/catalog/category/Metro_Tiles_1.jpg"
                    alt=""
                    className="group-hover:scale-125"
                  />
                </Link>
              </div>
              <p className="text-center">
                <Link>Metro Tiles</Link>
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="text-center py-6">
        <button className="py-2 px-8 text-white  bg-orange-300">
          View All
        </button>
      </div>
    </div>
  );
};

export default Explore;
