import React, { useEffect, useState } from 'react'

function roundTo (n, digits) {
  var negative = false
  if (digits === undefined) {
    digits = 0
  }
  if (n < 0) {
    negative = true
    n = n * -1
  }
  var multiplicator = Math.pow(10, digits)
  n = parseFloat((n * multiplicator).toFixed(11))
  n = (Math.round(n) / multiplicator).toFixed(2)
  if (negative) {
    n = (n * -1).toFixed(2)
  }
  return n
}

const Cart = ({ id }) => {
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
        console.log(json)
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
        <img alt='' src={'https://strapi.rudixlab.com' + product.image.url} />
      </div>
      <div className='w-full p-5 flex flex-col justify-between'>
        <div className='leading-loose'>
          <form
            className='max-w-xl m-4 p-10 bg-white rounded shadow-xl'
            action='https://formspree.io/f/xjvjzgna'
            method='POST'
            enctype='multipart/form-data'
          >
            <input
              className='w-full px-2 py-1 text-gray-700 bg-gray-200 rounded'
              id='cus_email'
              name='name'
              type='hidden'
              required=''
              placeholder='Име'
              aria-label='Email'
              value={'https://strapi.rudixlab.com' + product.image.url}
            />
            <p className='text-gray-800 font-medium'>Информация за поръчка</p>
            <div className='inline-block mt-2 w-1/2 pr-1'>
              <label
                className='hidden block text-sm text-gray-600'
                for='cus_email'
              >
                Име
              </label>
              <input
                className='w-full px-2 py-1 text-gray-700 bg-gray-200 rounded'
                id='cus_email'
                name='name'
                type='text'
                required=''
                placeholder='Име'
                aria-label='Email'
              />
            </div>
            <div className='inline-block mt-2 -mx-1 pl-1 w-1/2'>
              <label
                className='hidden block text-sm text-gray-600'
                for='cus_email'
              >
                Фамилия
              </label>
              <input
                className='w-full px-2 py-1 text-gray-700 bg-gray-200 rounded'
                id='family'
                name='family'
                type='text'
                required=''
                placeholder='Фамилия'
                aria-label='Email'
              />
            </div>

            <div className='mt-2'>
              <label className=' block text-sm text-gray-600' for='cus_email'>
                Доставка
              </label>
              <input
                className='w-full px-2 py-2 text-gray-700 bg-gray-200 rounded'
                id='cus_email'
                name='city'
                type='text'
                required=''
                placeholder='Град'
                aria-label='Email'
              />
            </div>
            <div className='mt-2'>
              <label
                className='hidden text-sm block text-gray-600'
                for='cus_email'
              >
                City
              </label>
              <input
                className='w-full px-2 py-2 text-gray-700 bg-gray-200 rounded'
                id='cus_email'
                name='office_ekont'
                type='text'
                required=''
                placeholder='Офис Еконт клон'
                aria-label='Email'
              />
            </div>
            <div className='mt-2'>
              <label
                className='hidden text-sm block text-gray-600'
                for='cus_email'
              >
                Телефон
              </label>
              <input
                className='w-full px-2 py-2 text-gray-700 bg-gray-200 rounded'
                id='cus_email'
                name='tel'
                type='text'
                required=''
                placeholder='Телефон'
                aria-label='Email'
              />
            </div>

            <div className='mt-4'>
              <button
                className='px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded'
                type='submit'
              >
                {roundTo(product.price, 2)} лв.
              </button>
            </div>
            <div style={{ paddingTop: 10 }}>
              <button
                type='submit'
                className='snipcart-add-item mt-4 bg-white border border-gray-200 d hover:shadow-lg text-gray-700 font-semibold py-2 px-4 rounded shadow'
              >
                Завърши Поръчката
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Cart
