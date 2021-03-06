import React, { useEffect, useState } from 'react'
import { roundTo } from './db'
const ProductsList = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const url = 'https://strapi.rudixlab.com/products'

    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const json = await response.json()
        setProducts(json)
      } catch (error) {
        console.log('error', error)
      }
    }

    fetchData()
  }, [])
  return (
    <>
      <h1 className='text-4xl m-6 text-gray-700 font-thin'>Добре Дошли!</h1>
      <div className='ml-6 mr-6 text-gray-700'>
        <img
          src='/model.jpg'
          alt=''
          className='rounded-lg mr-3 max-h-56 float-left'
        />
        За да изглеждате уникално и запомнящо се във всяка ситуация, вече няма
        нужда да губите време в досадно търсене.
        <a href='/about'>Повече за нас</a>
      </div>
      <div className='clear-both'></div>
      <h1 className='text-4xl  m-6 text-gray-700 font-thin'>Продукти</h1>
      <div className='m-6 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-8'>
        {products.map(_product => (
          <div
            key={_product.id}
            className='border rounded-lg bg-gray-100 hover:shadow-lg shadow-md'
          >
            <a href={`/product/${_product.slug}`}>
              <div className='w-full bg-white'>
                <div className='rounded-t-lg pt-2 pb-2 w-1/2 mx-auto'>
                  <span
                    className='px-4 py-1 text-white font-light tracking-wider bg-red-900 rounded absolute'
                    type='submit'
                  >
                    -{_product.percent}%
                  </span>
                  <img
                    src={
                      'https://strapi.rudixlab.com' +
                      _product.image.formats.medium.url
                    }
                    alt=''
                    className='rounded'
                  />
                </div>
              </div>
              <div className='pl-4 pr-4 pb-4 pt-4 rounded-lg'>
                <h4 className='mt-1 font-semibold text-base leading-tight truncate text-gray-700'>
                  <span className='text-xs text-gray-500 line-through'>
                    {roundTo(_product.price) + ' лв.'}
                  </span>{' '}
                  {roundTo((_product.price * (100 - _product.percent)) / 100)}{' '}
                  лв.
                </h4>
                <div className='mt-1 text-sm text-gray-700'>
                  {_product.title}
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  )
}

export default ProductsList
