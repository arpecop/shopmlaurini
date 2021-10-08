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
    <>
      <div className='m-2'>
        <h1 className='text-5xl font-thin text-gray-700'>
          {product.title} -{' '}
          {roundTo((product.price * (100 - product.percent)) / 100)} лв.
        </h1>
      </div>
      <div className='m-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mt-8'>
        <div className='rounded-t-lg pt-2 pb-2 m-auto'>
          <img
            alt=''
            src={'https://strapi.rudixlab.com' + product.image.url}
            className='rounded-lg'
          />
        </div>
        <div className='w-full p-5 flex flex-col justify-between'>
          <div className='mt-1 text-gray-600'>{product.description}</div>

          <div></div>
          <a
            href={'/cart/' + product.slug}
            className='text-center snipcart-add-item content-center mt-4 bg-white border border-gray-200 d hover:shadow-lg text-gray-700 font-semibold py-2 px-4 rounded shadow'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
              />
            </svg>
            Добави в Количката
          </a>
        </div>
      </div>
    </>
  )
}

export default Product
