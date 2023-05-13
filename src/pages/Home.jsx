import { Link, useLoaderData } from 'react-router-dom'
import './home.css'
import Clock from '../components/Countdown'

// loader y useLoaderData

const HomePage = () => {
  const { products = [] } = useLoaderData()

  return(
    <div>
      <h1>WORKSHOP</h1>

      <div className='container'>
        {products.map((item, index) => (
          <div className='container__product' key={index}>
            <Link to={`/product-card/${item.id}`}>
              <div>
              <img src={item.image} alt="" />
              </div>
              <div className='container__product--name'>
              {item.title}
              </div>
              <Clock />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomePage

export const loaderProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products')

  const data = await response.json()

  return { products: data }
}