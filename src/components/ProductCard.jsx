import { useLoaderData } from 'react-router-dom'

const ProductCard = () => {
  const { post } = useLoaderData()
  return(
    <div>
      <h1>{post.id} - {post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}

export default ProductCard

export const loaderProduct = async ({ params }) => {
  const { id } = params
  const response = await fetch(`https://fakestoreapi.com/products/${id}`)
  const data = await response.json()

  return { post: data }
}