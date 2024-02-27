import React, { useState } from "react";
import Details from "./Details";
import Delivery from "./Delivery";
import Reviews from "./Reviews";
import Attachments from "./Attachments";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const [details, setDetails] = useState(true);
  const [reviews, setReviews] = useState(false);
  const [delivery, setDelivery] = useState(false);
  const [attachments, setAttachments] = useState(false);

  const handleDetails = () => {
    setDetails(true);
    setDelivery(false);
    setReviews(false);
    setAttachments(false);
  };

  const handleReviews = () => {
    setDetails(false);
    setDelivery(false);
    setReviews(true);
    setAttachments(false);
  };

  const handleDelivery = () => {
    setDetails(false);
    setDelivery(true);
    setReviews(false);
    setAttachments(false);
  };

  const handleAttachments = () => {
    setDetails(false);
    setDelivery(false);
    setReviews(false);
    setAttachments(true);
  };

  return (
    <div className="lg:flex gap-5">
      <div className="bg-white my-4 p-6 w-full lg:w-2/3">
        <div className="flex gap-2 p-2">
          <button
            className="border lg:py-1 lg:px-4 text-xs text-center lg:text-lg  border-gray-500"
            onClick={handleDetails}
          >
            Details
          </button>
          <button
            className="border lg:py-1 lg:px-4 text-xs text-center lg:text-lg  border-gray-500"
            onClick={handleReviews}
          >
            Reviews
          </button>
          <button
            className="border lg:py-1 lg:px-4 text-xs text-center lg:text-lg  border-gray-500"
            onClick={handleDelivery}
          >
            Delivery & Returns
          </button>
          <button
            className="border lg:py-1 lg:px-4 text-xs text-center lg:text-lg  border-gray-500"
            onClick={handleAttachments}
          >
            Attachments
          </button>
        </div>

        {delivery && <Delivery />}
        {details && <Details />}
        {reviews && <Reviews />}
        {attachments && <Attachments />}
      </div>

      <div className="lg:w-1/3 w-full bg-white my-4">
        <div className="flex flex-wrap">



          <div className="w-1/2 p-2">
            <Link to="/product">
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
              <Link to="/product">
                Dazzle Alabastrino Bianco Porcelain Semi-Polished Tile 120x60cm
              </Link>
            </div>
            <div className="flex border border-black text-center ">
              <div className="w-1/2 bg-black text-white py-1">Details</div>
              <div className="w-1/2 py-1 ">Sample</div>
            </div>
          </div>
          <div className="w-1/2 p-2">
            <Link to="/product">
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
              <Link to="/product">
                Dazzle Alabastrino Bianco Porcelain Semi-Polished Tile 120x60cm
              </Link>
            </div>
            <div className="flex border border-black text-center ">
              <div className="w-1/2 bg-black text-white py-1">Details</div>
              <div className="w-1/2 py-1 ">Sample</div>
            </div>
          </div>
          <div className="w-1/2 p-2">
            <Link to="/product">
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
              <Link to="/product">
                Dazzle Alabastrino Bianco Porcelain Semi-Polished Tile 120x60cm
              </Link>
            </div>
            <div className="flex border border-black text-center ">
              <div className="w-1/2 bg-black text-white py-1">Details</div>
              <div className="w-1/2 py-1 ">Sample</div>
            </div>
          </div>
          <div className="w-1/2 p-2">
            <Link to="/product">
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
              <Link to="/product">
                Dazzle Alabastrino Bianco Porcelain Semi-Polished Tile 120x60cm
              </Link>
            </div>
            <div className="flex border border-black text-center ">
              <div className="w-1/2 bg-black text-white py-1">Details</div>
              <div className="w-1/2 py-1 ">Sample</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
