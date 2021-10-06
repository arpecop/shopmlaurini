import React, { useEffect, useState } from 'react'
import { cats, counties, roundTo } from './db'
import axios from 'axios'

const Cart = ({ id }) => {
  const [count, setCount] = useState(1)
  const [region, setRegion] = useState([])
  const [firstName, setFirstname] = useState('')
  const [complete, setComplete] = useState(false)
  const [product, setProduct] = useState({
    image: {
      url: ''
    }
  })
  const handleSubmit = event => {
    event.preventDefault()
    setFirstname(event.target.elements.name.value)
    axios
      .post('https://jldjf9dwma.execute-api.eu-central-1.amazonaws.com/dev/', {
        картинка: event.target.elements.image.value,
        име: event.target.elements.name.value,
        фамилия: event.target.elements.family.value,
        телефон: event.target.elements.tel.value,
        регион: event.target.elements.region.value,
        град: event.target.elements.city.value,
        офис_еконт: event.target.elements.office_ekont.value,
        количество: event.target.elements.kolichestvo.value
      })
      .then(function (response) {
        console.log(response.data)
        setComplete(true)
      })
      .catch(function (error) {
        console.log(error)
        setComplete(true)
      })
  }

  const handleAddrTypeChange = e => {
    const filtered = counties.filter(c => c.key === e.target.value)
    console.log(filtered)
    setRegion(filtered)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://strapi.rudixlab.com/products/' + id
        )
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
      <div className='rounded-t-lg'>
        <img
          alt=''
          src={'https://strapi.rudixlab.com' + product.image.url}
          className='rounded-lg'
        />
      </div>
      <div className='w-full flex flex-col justify-between'>
        <div className='leading-loose'>
          {!complete ? (
            <form
              className='max-w-xl  p-5 bg-white rounded shadow-xl'
              //action='https://formspree.io/f/xjvjzgna'
              method='POST'
              onSubmit={handleSubmit}
            >
              <input
                className='w-full px-2 py-1 text-gray-700 bg-gray-200 rounded'
                id='cus_email'
                name='image'
                type='hidden'
                required=''
                value={'https://strapi.rudixlab.com' + product.image.url}
              />
              <input
                className='w-full px-2 py-1 text-gray-700 bg-gray-200 rounded'
                id='cus_email'
                name='quantity'
                type='hidden'
                value={'https://strapi.rudixlab.com' + product.image.url}
              />
              <input
                className='w-full px-2 py-1 text-gray-700 bg-gray-200 rounded'
                id='cus_email'
                name='kolichestvo'
                type='hidden'
                aria-label='Email'
                value={count}
              />
              <p className='text-gray-800 font-medium'>Информация за поръчка</p>
              <div className='inline-block mt-2 w-1/2 pr-1'>
                <label className='hidden block text-sm text-gray-600'>
                  Име
                </label>
                <input
                  className='w-full px-2 py-2 text-gray-700 bg-gray-200 rounded'
                  id='cus_email'
                  name='name'
                  type='text'
                  required=''
                  placeholder='Име'
                  aria-label='Email'
                />
              </div>
              <div className='inline-block mt-2 -mx-1 pl-1 w-1/2'>
                <label className='hidden block text-sm text-gray-600'>
                  Фамилия
                </label>
                <input
                  className='w-full px-2 py-2 text-gray-700 bg-gray-200 rounded'
                  id='family'
                  name='family'
                  type='text'
                  required=''
                  placeholder='Фамилия'
                  aria-label='Email'
                />
              </div>
              <div className='mt-2'>
                <label className='hidden text-sm block text-gray-600'>
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
              <div className='mt-2'>
                <label className=' block text-sm text-gray-600'>Доставка</label>
                <div className='inline-block mt-2 w-1/2 pr-1'>
                  <select
                    placeholder='Град'
                    onChange={e => handleAddrTypeChange(e)}
                    name='region'
                    id='dog-names'
                    className='w-full px-2 py-3 text-gray-700 bg-gray-200 rounded mt-1'
                  >
                    <option value='rigatoni'>Регион</option>
                    {cats.map(city => (
                      <option key={city.id} value={city.key}>
                        {city.value.text}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='inline-block mt-2 w-1/2 pr-1'>
                  <select
                    onChange={e => handleAddrTypeChange(e)}
                    disabled={region.length === 0}
                    name='city'
                    id='dog-names'
                    className='w-full px-2 py-3 text-gray-700 bg-gray-200 rounded mt-1'
                  >
                    {region.map(city => (
                      <option key={city.id} value={city.key}>
                        {city.value.text}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className='mt-2'>
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

              <div className='mt-4'>
                <span
                  className='px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded'
                  type='submit'
                >
                  {roundTo((product.price * (100 - product.percent)) / 100)} лв.
                </span>
                {count >= 2 && (
                  <span
                    className='cursor-pointer mt-4 bg-white border border-gray-200 d hover:shadow-lg text-gray-700 font-semibold py-2 px-4 rounded shadow'
                    onClick={() => setCount(count - 1)}
                  >
                    -
                  </span>
                )}

                <span className='mt-4 bg-white  py-2 px-4 '>{count}</span>
                <span
                  className='cursor-pointer mt-4 bg-white border border-gray-200 d hover:shadow-lg text-gray-700 font-semibold py-2 px-4 rounded shadow'
                  onClick={() => setCount(count + 1)}
                >
                  +
                </span>
              </div>
              <div style={{ paddingTop: 10 }}>
                <button
                  type='submit'
                  className='w-full snipcart-add-item mt-4 bg-white border border-gray-200 d hover:shadow-lg text-gray-700 font-semibold py-2 px-4 rounded shadow'
                >
                  Завърши Поръчката
                </button>
              </div>
            </form>
          ) : (
            <h1>Благодарим Ви {firstName}! </h1>
          )}
        </div>
      </div>
    </div>
  )
}

export default Cart
