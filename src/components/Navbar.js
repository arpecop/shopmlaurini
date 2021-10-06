import React from 'react'
import useToggle from '../hooks/toggle'

const menu = [
  { item: 'Начало', href: '/' },
  { item: 'За Нас', href: '/about' },
  { item: 'Контакт', href: '/contact' }
]

const Navbar = () => {
  const [isOn, toggleIsOn] = useToggle()
  return (
    <nav className='bg-white shadow-lg'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex justify-between'>
          <div className='flex space-x-7'>
            <div>
              <a href='/' className='flex items-center py-4 px-2'>
                <img src='/logo1.png' alt='Logo' className='h-8 w-8 mr-2' />
                <span className='font-semibold text-green-500 text-lg'>
                  Melisa Laurini
                </span>
              </a>
            </div>

            <div className='hidden md:flex items-center space-x-1'>
              {menu.map(item => (
                <a
                  key={item.item}
                  href={item.href}
                  className='py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300'
                >
                  {item.item}
                </a>
              ))}
            </div>
          </div>

          <div className='md:hidden flex items-center'>
            <button
              className='outline-none mobile-menu-button'
              onClick={toggleIsOn}
            >
              <svg
                className='w-6 h-6 text-gray-500 hover:text-green-500'
                x-show='!showMenu'
                fill='none'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path d='M4 6h16M4 12h16M4 18h16'></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={isOn ? 'mobile-menu' : 'hidden mobile-menu'}>
        <ul className=''>
          {menu.map(item => (
            <a
              key={item.item}
              href={item.href}
              className='block text-sm px-2 py-4 hover:bg-green-500 transition duration-300'
            >
              {item.item}
            </a>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
