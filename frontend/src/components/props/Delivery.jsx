import React from 'react';

const Delivery = () => {
  return (
    <div>
    <div className="text-xl pt-4">DELIVERY COSTS</div>
    <p className="text-sm text-red-500 py-1">Delivery Costs to Ireland</p>
    <p className="text-sm text-red-500 py-1">Delivery Costs to India</p>

    <div className="text-xl pt-4">Returns</div>
    <p className="text-sm text-red-500 py-1">Read our Returns Policy</p>

    <div className="text-xl pt-4">ABOUT DELIVERIES</div>

    <div>

      <div className="flex items-center border-b py-4">
        <div className="w-20">
          <img
            src="https://images.tilemerchant.ie/static/frontend/Limely/tilemerchant/en_GB/images/img-del-samples.png"
            alt=""
            className="w-full"
          />
        </div>
        <div className="px-4">
          <div className="text-xl">Samples</div>
          <p className="text-sm text-gray-600">
            All samples are shipped FREE with 2-4 day delivery to Ireland and
            Northern Ireland. DPD is our shipping partner for samples.
            Tracking information will be provided by text and email once your
            order has been dispatched.
          </p>
        </div>
      </div>



      <div className="flex items-center border-b py-4">
        <div className="w-20">
          <img
            src="https://images.tilemerchant.ie/static/frontend/Limely/tilemerchant/en_GB/images/img-del-small.png"
            alt=""
            className="w-full"
          />
        </div>
        <div className="px-4">
          <div className="text-xl">Small Deliveries - Courier</div>
          <p className="text-sm text-gray-600">
          All of our small deliveries (less than 20Kg) are shipped with DPD with 2-4 day delivery to Ireland and Northern Ireland. Updated tracking information will be sent via email and text once your order has been dispatched.
          </p>
        </div>
      </div>

      <div className="flex items-center border-b py-4">
        <div className="w-16">
          <img
            src="https://images.tilemerchant.ie/static/frontend/Limely/tilemerchant/en_GB/images/img-del-large.png"
            alt=""
            className="w-full"
          />
        </div>
        <div className="px-4">
          <div className="text-xl">Large Orders - Pallet</div>
          <p className="text-sm text-gray-600">
          All of our pallet orders are shipped on our own trucks. We can deliver anywhere in Ireland or Northern Ireland within 2-4 days.
          </p>
        </div>
      </div>

    </div>
  </div>
  );
};

export default Delivery;
