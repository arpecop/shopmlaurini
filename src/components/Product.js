const Product = ({ product }) => {
  return (
    <div className='m-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mt-8'>
      <div className='rounded-t-lg pt-2 pb-2 m-auto h-40 w-40'>
        <img alt='' media={product.image} />
      </div>
      <div className='w-full p-5 flex flex-col justify-between'>
        <div>
          <h4 className='mt-1 font-semibold text-lg leading-tight truncate text-gray-700'>
            {product.title} - ${product.price}
          </h4>
          <div className='mt-1 text-gray-600'>{product.description}</div>
        </div>

        <a
          href={'/cart/' + product.id}
          className='snipcart-add-item mt-4 bg-white border border-gray-200 d hover:shadow-lg text-gray-700 font-semibold py-2 px-4 rounded shadow'
        >
          Добави в Количката
        </a>
      </div>
    </div>
  )
}

export default Product
