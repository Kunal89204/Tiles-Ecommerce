import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const ImageThumbnail = () => {
  const [imgUrl, setUrl] = useState(
    "https://images.tilemerchant.ie/media/catalog/product/cache/31921ae51e31d933e57738157a5fecc9/_/m/dazzle-alabastrino-bianco-porcelain-semi-polished-tile-120x60cm-16.jpg"
  );

  const handleThumbnail = (url) => {
    setUrl(url);
  };
  return (
    <div className=" lg:flex justify-center gap-10 ">
      {/* Product images box */}
      <div className="bg-white lg:w-1/2 p-4  ">
        {/* Main Image */}
        <div className="flex justify-center">
          <img src={imgUrl} alt="" />
        </div>

        {/* Thumbnails */}
        <div className="flex w-full gap-2 p-2 overflow-scroll border">
          <div className="lg:w-20  cursor-pointer">
            <img
              src="https://images.tilemerchant.ie/media/catalog/product/cache/31921ae51e31d933e57738157a5fecc9/_/m/dazzle-alabastrino-bianco-porcelain-semi-polished-tile-120x60cm-16.jpg"
              alt=""
              onClick={(e) => handleThumbnail(e.target.src)}
              className="w-full"
            />
          </div>
          <div className="lg:w-20  cursor-pointer">
            <img
              src="https://images.tilemerchant.ie/media/catalog/product/cache/31921ae51e31d933e57738157a5fecc9/_/m/dazzle-alabastrino-bianco-porcelain-semi-polished-tile-120x60cm-17.jpg"
              alt=""
              onClick={(e) => handleThumbnail(e.target.src)}
            />
          </div>
          <div className="lg:w-20  cursor-pointer">
            <img
              src="https://images.tilemerchant.ie/media/catalog/product/cache/31921ae51e31d933e57738157a5fecc9/_/m/dazzle-alabastrino-bianco-porcelain-semi-polished-tile-120x60cm-16.jpg"
              alt=""
              onClick={(e) => handleThumbnail(e.target.src)}
            />
          </div>
          <div className="lg:w-20  cursor-pointer">
            <img
              src="https://images.tilemerchant.ie/media/catalog/product/cache/31921ae51e31d933e57738157a5fecc9/_/m/dazzle-alabastrino-bianco-porcelain-semi-polished-tile-120x60cm-17.jpg"
              alt=""
              onClick={(e) => handleThumbnail(e.target.src)}
            />
          </div>
          <div className="lg:w-20  cursor-pointer">
            <img
              src="https://images.tilemerchant.ie/media/catalog/product/cache/31921ae51e31d933e57738157a5fecc9/_/m/dazzle-alabastrino-bianco-porcelain-semi-polished-tile-120x60cm-16.jpg"
              alt=""
              onClick={(e) => handleThumbnail(e.target.src)}
            />
          </div>
          <div className="lg:w-20  cursor-pointer">
            <img
              src="https://images.tilemerchant.ie/media/catalog/product/cache/31921ae51e31d933e57738157a5fecc9/_/m/dazzle-alabastrino-bianco-porcelain-semi-polished-tile-120x60cm-17.jpg"
              alt=""
              onClick={(e) => handleThumbnail(e.target.src)}
            />
          </div>
          <div className="lg:w-20  cursor-pointer">
            <img
              src="https://images.tilemerchant.ie/media/catalog/product/cache/31921ae51e31d933e57738157a5fecc9/_/m/dazzle-alabastrino-bianco-porcelain-semi-polished-tile-120x60cm-16.jpg"
              alt=""
              onClick={(e) => handleThumbnail(e.target.src)}
            />
          </div>
          <div className="lg:w-20  cursor-pointer">
            <img
              src="https://images.tilemerchant.ie/media/catalog/product/cache/31921ae51e31d933e57738157a5fecc9/_/m/dazzle-alabastrino-bianco-porcelain-semi-polished-tile-120x60cm-17.jpg"
              alt=""
              onClick={(e) => handleThumbnail(e.target.src)}
            />
          </div>
        </div>
      </div>

      <div className="bg-white p-10 lg:w-1/2  my-4 lg:my-0">
        <div className="text-3xl py-2">
          Dazzle Alabastrino Bianco Porcelain Semi-Polished Tile 120x60cm
        </div>
        <p className="py-2 text-gray-500">1200x600x10mm</p>
        <p className="font-thin text-gray-500 py-4">
          A blend of fancy patterns, geometrical shapes and, motif art – the
          Moroccan Vitrified Tile are ideal for bringing wall and floor to life.
        </p>
        <p className="text-xl text-orange-400 py-2">₹110.00/ Sqft</p>

        <input
          type="number"
          className="border my-2 py-2 px-4 text-xl focus:border-gray-600 outline-none"
        />

        <div className="py-2">
          <button className="bg-orange-400 text-white py-2 px-10">
            Add To Cart
          </button>
        </div>
        <div className="py-2">
          <button className="flex items-center text-lg gap-2 bg-green-400 py-2 px-8 rounded hover:bg-green-500">
            {" "}
            <FaWhatsapp className="text-2xl" /> Order or enquire over Whatsapp
          </button>
        </div>

        <p className="font-thin text-gray-500 py-2 text-sm">
          Categories: Bathroom tiles, Bedroom tiles, Floor Tiles, Kitchen Tiles,
          Living room tiles, Moroccan Tiles, Printed Tiles, Wall Tiles
        </p>
        <div className="py-2">
          <hr />
        </div>

        <div className="text-gray-600 font-thin py-2 text-sm">
          <p>* Currently, free sample service is available only in Delhi-NCR</p>
          <p>* Taxes will be charged extra as applicable</p>
          <p>
            * The images represent actual product though color of the image and
            product may slightly differ
          </p>
          <p>
            * Cart quantity is in square feet for tiles, piece for sanitary
            products and bags for chemicals
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageThumbnail;
