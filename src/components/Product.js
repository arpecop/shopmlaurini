import React, { useEffect, useState } from 'react'
import { roundTo } from './db'
const Product = ({ id }) => {
  const [product, setProduct] = useState({
    image: {
      url: ''
    }
  })

  useEffect(() => {
    const url = 'https://strapi.rudixlab.com/products/' + id

    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const json = await response.json()

        setProduct(json)
      } catch (error) {
        console.log('error', error)
      }
    }

    fetchData()
  }, [id])
  return (
    <div className='m-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mt-8'>
      <div className='rounded-t-lg pt-2 pb-2 m-auto'>
        <img
          alt=''
          src={'https://strapi.rudixlab.com' + product.image.url}
          className='rounded-lg'
        />
      </div>
      <div className='w-full p-5 flex flex-col justify-between'>
        <div>
          <h4 className='mt-1 font-semibold text-lg leading-tight truncate text-gray-700'>
            {product.title} -{' '}
            {roundTo((product.price * (100 - product.percent)) / 100)} лв.
          </h4>
          <div className='mt-1 text-gray-600'>{product.description}</div>
        </div>
        <div></div>
        <a
          href={'/cart/' + product.slug}
          className='text-center snipcart-add-item content-center mt-4 bg-white border border-gray-200 d hover:shadow-lg text-gray-700 font-semibold py-2 px-4 rounded shadow'
        >
          Добави в Количката
        </a>
      </div>
    </div>
  )
}

export default Product
