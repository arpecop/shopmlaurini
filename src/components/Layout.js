import CategoryButtons from './CategoryButtons'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children, categories }) => {
  return (
    <>
      <Navbar />
      <div className='flex justify-center bg-gray-200'>
        <div className='max-w-screen-lg flex flex-col min-h-screen w-full'>
          <CategoryButtons categories={categories} />
          <div className='flex-grow'>{children}</div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Layout
