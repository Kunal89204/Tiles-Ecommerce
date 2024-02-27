import React from 'react'
import ImageThumbnail from '../components/props/ImageThumbnail'
import ProductDetails from '../components/props/ProductDetails'

const ProductListing = () => {
  return (
    <div className='bg-gray-100 lg:p-10 p-2 2xl:px-40'>
      <ImageThumbnail />
      <ProductDetails  />
    </div>
  )
}

export default ProductListing
