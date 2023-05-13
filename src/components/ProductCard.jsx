import { useLoaderData } from 'react-router-dom'

const ProductCard = () => {
  const { product } = useLoaderData()
  return(
    <div>
      <h1>{product.id} - {product.title}</h1>
      <img src={product.image} alt="" />
    </div>
  )
}

export default ProductCard

export const loaderProduct = async ({ params }) => {
  const { id } = params
  const response = await fetch(`https://fakestoreapi.com/products/${id}`)
  const data = await response.json()

  return { product: data }
}