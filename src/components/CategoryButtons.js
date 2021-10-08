const CategoryButtons = ({ categories = [] }) => {
  return (
    <div className='container flex flex-wrap mx-auto gap-2'>
      {categories.map(_category => (
        <a
          href={`/categories/${_category.slug}`}
          key={_category.id}
          className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'
        >
          {_category.name}
        </a>
      ))}
    </div>
  )
}

export default CategoryButtons
