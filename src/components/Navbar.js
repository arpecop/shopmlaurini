const Navbar = () => {
  return (
    <div className='flex justify-between ml-6 mr-6 mt-4'>
      <a>
        <img
          src='/logo.png'
          alt='home'
          className='logo'
          style={{ height: 100 }}
        />
      </a>

      <button className='snipcart-checkout flex items-center'>
        <span className='snipcart-total-price ml-3 font-semibold text-sm text-indigo-500'>
          дасдас
        </span>
      </button>
    </div>
  )
}

export default Navbar
