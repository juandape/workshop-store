import { Link, useLoaderData } from 'react-router-dom'

// loader y useLoaderData

const ProductDetail = () => {
  const { posts = [] } = useLoaderData()

  return(
    <div>
      <h1>Product Details</h1>

      <ul>
        {posts.map((item, index) => (
          <li key={index}>
            <Link to={`/productDetail/${item.id}`}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductDetail

export const loaderProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products')

  const data = await response.json()

  return { posts: data }
}