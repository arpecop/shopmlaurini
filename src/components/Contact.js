import React, { useState } from 'react'

import axios from 'axios'

const Cart = ({ id }) => {
  const [firstName, setFirstname] = useState('')
  const [complete, setComplete] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    setFirstname(event.target.elements.name.value)
    axios
      .post('https://jldjf9dwma.execute-api.eu-central-1.amazonaws.com/dev/', {
        име: event.target.elements.name.value,
        фамилия: event.target.elements.family.value,
        мейл: event.target.elements.mail.value,
        съобщение: event.target.elements.message.value
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

  return (
    <>
      <div className='leading-loose'>
        {!complete ? (
          <form
            className='max-w-xl  p-5 bg-white rounded shadow-xl'
            //action='https://formspree.io/f/xjvjzgna'
            method='POST'
            onSubmit={handleSubmit}
          >
            <div className='inline-block mt-2 w-1/2 pr-1'>
              <label className='hidden block text-sm text-gray-600'>Име</label>
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
              <input
                className='w-full px-2 py-2 text-gray-700 bg-gray-200 rounded'
                id='cus_email'
                name='mail'
                type='text'
                required=''
                placeholder='Email'
                aria-label='Email'
              />
            </div>
            <div className='mt-2'>
              <label className=' block text-sm text-gray-600'>Съобщение</label>
              <textarea
                className='w-full px-2 py-2 text-gray-700 bg-gray-200 rounded'
                id='cus_email'
                name='message'
                type='text'
                required=''
                placeholder='Съобщение'
                aria-label='Email'
              />
            </div>

            <div style={{ paddingTop: 10 }}>
              <button
                type='submit'
                className='w-full snipcart-add-item mt-4 bg-white border border-gray-200 d hover:shadow-lg text-gray-700 font-semibold py-2 px-4 rounded shadow'
              >
                Изпрати
              </button>
            </div>
          </form>
        ) : (
          <h1>Благодарим Ви {firstName}! </h1>
        )}
      </div>
    </>
  )
}

export default Cart
