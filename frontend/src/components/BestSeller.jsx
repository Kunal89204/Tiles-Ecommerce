import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const BestSeller = () => {
    const breakpoints = {
        320: {
            slidesPerView: 1
        },
        700: {
            slidesPerView:2
        },
        1000: {
            slidesPerView: 3
        },
        1150:{
            slidesPerView: 4,
            spaceBetween: 30
        },
        1300: {
            slidesPerView:5
        }
    }
  return (
    <div>
      <div>
        <div className="text-center py-8 text-2xl font-semibold">
          BEST SELLERS
        </div>
        <div className="flex justify-center gap-10">
          <div className="hover:underline cursor-pointer">
            <Link>Tiles</Link>
          </div>
          <div className="hover:underline cursor-pointer">
            <Link>Outdoor</Link>
          </div>
          <div className="hover:underline cursor-pointer">
            <Link>Wall Panels</Link>
          </div>
          <div className="hover:underline cursor-pointer">
            <Link> Cladding</Link>
          </div>
          <div className="hover:underline cursor-pointer">
            <Link>Flooring</Link>
          </div>
          <div className="hover:underline cursor-pointer">
            <Link>Accessories</Link>
          </div>
        </div>

        <div className="p-10 px-20">
          <Swiper
            spaceBetween={20}
            breakpoints={breakpoints}
            loop={true}
            slidesPerView={5}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div>
                <Link to='/product'>
                  <div className="relative group">
                    <img
                      src="https://images.tilemerchant.ie/media/catalog/product/cache/31921ae51e31d933e57738157a5fecc9/_/m/dazzle-alabastrino-bianco-porcelain-semi-polished-tile-120x60cm-1.jpg"
                      alt=""
                      className="group-hover:opacity-0 group-hover:scale-90"
                    />
                    <img
                      src="https://images.tilemerchant.ie/media/catalog/product/cache/dbb1e080a2e017aa3c3c2010ec2c266a/T/D/dazzle-alabastrino-bianco-porcelain-semi-polished-tile-120x60cm.jpg"
                      alt=""
                      className="absolute top-0 opacity-0 group-hover:opacity-100 group-hover:scale-110"
                    />
                  </div>
                </Link>
                <div className="py-2 bg-gray-100 my-2 text-center">
                  Rs. 1000/m <sup>2</sup>
                </div>
                <div className="text-center">
                  <Link to='/product'>
                    Dazzle Alabastrino Bianco Porcelain Semi-Polished Tile
                    120x60cm
                  </Link>
                </div>
                <div className="flex border border-black text-center ">
                  <div className="w-1/2 bg-black text-white py-1">Details</div>
                  <div className="w-1/2 py-1 ">Sample</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Link to='/product'>
                  <div className="relative group">
                    <img
                      src="https://images.tilemerchant.ie/media/catalog/product/cache/31921ae51e31d933e57738157a5fecc9/_/m/amstel-cemento-porcelain-matt-tile-60x30cm-1.jpg"
                      alt=""
                      className="group-hover:opacity-0 group-hover:scale-90"
                    />
                    <img
                      src="https://images.tilemerchant.ie/media/catalog/product/cache/dbb1e080a2e017aa3c3c2010ec2c266a/T/S/amstel-cemento-porcelain-matt-tile-60x30cm.jpg"
                      alt=""
                      className="absolute top-0 opacity-0 group-hover:opacity-100 group-hover:scale-110"
                    />
                  </div>
                </Link>
                <div className="py-2 bg-gray-100 my-2 text-center">
                  Rs. 1000/m <sup>2</sup>
                </div>
                <div className="text-center">
                  <Link to='/product'>
                    Dazzle Alabastrino Bianco Porcelain Semi-Polished Tile
                    120x60cm
                  </Link>
                </div>
                <div className="flex border border-black text-center ">
                  <div className="w-1/2 bg-black text-white py-1">Details</div>
                  <div className="w-1/2 py-1 ">Sample</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Link to='/product'>
                  <div className="relative group">
                    <img
                      src="https://images.tilemerchant.ie/media/catalog/product/cache/31921ae51e31d933e57738157a5fecc9/T/B/borgo-noir-porcelain-wall-tile-gloss-20x65cm-1.jpg"
                      alt=""
                      className="group-hover:opacity-0 group-hover:scale-90"
                    />
                    <img
                      src="https://images.tilemerchant.ie/media/catalog/product/cache/31921ae51e31d933e57738157a5fecc9/T/B/borgo-noir-porcelain-wall-tile-gloss-20x65cm-9.png"
                      alt=""
                      className="absolute top-0 opacity-0 group-hover:opacity-100 group-hover:scale-110"
                    />
                  </div>
                </Link>
                <div className="py-2 bg-gray-100 my-2 text-center">
                  Rs. 1000/m <sup>2</sup>
                </div>
                <div className="text-center">
                  <Link to='/product'>
                    Dazzle Alabastrino Bianco Porcelain Semi-Polished Tile
                    120x60cm
                  </Link>
                </div>
                <div className="flex border border-black text-center ">
                  <div className="w-1/2 bg-black text-white py-1">Details</div>
                  <div className="w-1/2 py-1 ">Sample</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Link to='/product'>
                  <div className="relative group">
                    <img
                      src="https://images.tilemerchant.ie/media/catalog/product/cache/31921ae51e31d933e57738157a5fecc9/T/I/statuario-light-grande-marble-effect-porcelain-gloss-tile-120x60cm-1.jpg"
                      alt=""
                      className="group-hover:opacity-0 group-hover:scale-90"
                    />
                    <img
                      src="https://images.tilemerchant.ie/media/catalog/product/cache/31921ae51e31d933e57738157a5fecc9/T/I/statuario-light-grande-marble-effect-porcelain-gloss-tile-120x60cm-20.jpg"
                      alt=""
                      className="absolute top-0 opacity-0 group-hover:opacity-100 group-hover:scale-110"
                    />
                  </div>
                </Link>
                <div className="py-2 bg-gray-100 my-2 text-center">
                  Rs. 1000/m <sup>2</sup>
                </div>
                <div className="text-center">
                  <Link to='/product'>
                    Dazzle Alabastrino Bianco Porcelain Semi-Polished Tile
                    120x60cm
                  </Link>
                </div>
                <div className="flex border border-black text-center ">
                  <div className="w-1/2 bg-black text-white py-1">Details</div>
                  <div className="w-1/2 py-1 ">Sample</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Link to='/product'>
                  <div className="relative group">
                    <img
                      src="https://images.tilemerchant.ie/media/catalog/product/cache/31921ae51e31d933e57738157a5fecc9/T/U/udino-nero-terrazzo-effect-porcelain-matt-tile-120x60cm-1.jpg"
                      alt=""
                      className="group-hover:opacity-0 group-hover:scale-90"
                    />
                    <img
                      src="https://images.tilemerchant.ie/media/catalog/product/cache/31921ae51e31d933e57738157a5fecc9/T/U/udino-nero-terrazzo-effect-porcelain-matt-tile-120x60cm-14.jpg"
                      alt=""
                      className="absolute top-0 opacity-0 group-hover:opacity-100 group-hover:scale-110"
                    />
                  </div>
                </Link>
                <div className="py-2 bg-gray-100 my-2 text-center">
                  Rs. 1000/m <sup>2</sup>
                </div>
                <div className="text-center">
                  <Link to='/product'>
                    Dazzle Alabastrino Bianco Porcelain Semi-Polished Tile
                    120x60cm
                  </Link>
                </div>
                <div className="flex border border-black text-center ">
                  <div className="w-1/2 bg-black text-white py-1">Details</div>
                  <div className="w-1/2 py-1 ">Sample</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Link to='/product'>
                  <div className="relative group">
                    <img
                      src="https://images.tilemerchant.ie/media/catalog/product/cache/31921ae51e31d933e57738157a5fecc9/_/m/dazzle-toronto-bianco-porcelain-tile-120x60cm-1.jpg"
                      alt=""
                      className="group-hover:opacity-0 group-hover:scale-90"
                    />
                    <img
                      src="https://images.tilemerchant.ie/media/catalog/product/cache/31921ae51e31d933e57738157a5fecc9/T/D/dazzle-toronto-bianco-porcelain-tile-120x60cm-23.jpg"
                      alt=""
                      className="absolute top-0 opacity-0 group-hover:opacity-100 group-hover:scale-110"
                    />
                  </div>
                </Link>
                <div className="py-2 bg-gray-100 my-2 text-center">
                  Rs. 1000/m <sup>2</sup>
                </div>
                <div className="text-center">
                  <Link to='/product'>
                    Dazzle Alabastrino Bianco Porcelain Semi-Polished Tile
                    120x60cm
                  </Link>
                </div>
                <div className="flex border border-black text-center ">
                  <div className="w-1/2 bg-black text-white py-1">Details</div>
                  <div className="w-1/2 py-1 ">Sample</div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
