import Head from "next/head"
import { useRouter } from "next/router"

import NextImage from "../../components/Image"
import { getProducts, getProduct } from "../../utils/api"
import { getStrapiMedia } from "../../utils/medias"

const ProductPage = ({ product }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading product...</div>
  }

  return (
    <div className='m-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mt-8'>
      <Head>
        <title>{product.title} </title>
      </Head>

      <div className='rounded-t-lg pt-2 pb-2 m-auto h-40 w-40'>
        <NextImage media={product.image} />
      </div>
      <div className='w-full p-5 flex flex-col justify-between'>
        <div>
          <h4 className='mt-1 font-semibold text-lg leading-tight truncate text-gray-700'>
            {product.title} - ${product.price}
          </h4>
          <div className='mt-1 text-gray-600'>{product.description}</div>
        </div>

        <a
          href={"/cart/" + product.id}
          className='snipcart-add-item mt-4 bg-white border border-gray-200 d hover:shadow-lg text-gray-700 font-semibold py-2 px-4 rounded shadow'
          data-item-id={product.id}
          data-item-price={product.price}
          data-item-url={router.asPath}
          data-item-description={product.description}
          data-item-image={getStrapiMedia(product.image.formats.thumbnail.url)}
          data-item-name={product.title}
          v-bind='customFields'
        >
          Добави в Количката
        </a>
      </div>
    </div>
  )
}

export default ProductPage

export async function getStaticProps ({ params }) {
  const product = await getProduct(params.slug)
  return { props: { product } }
}

export async function getStaticPaths () {
  const products = await getProducts()
  return {
    paths: products.map(_product => {
      return {
        params: { slug: _product.slug },
      }
    }),
    fallback: true,
  }
}
