import axios from 'axios'
import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { ProductsGrid } from './ProductsGrid'
import './HomePage.css'

export function HomePage({ cart }) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get('/api/products')
      setProducts(response.data)
    }

    getHomeData()
  }, [])

  return (
    <>
      <title>Pierce Bold</title>

      <Header cart={cart} />

      <div className='home-page'>
        <ProductsGrid products={products} />
      </div>
    </>
  )
}

// import axios from 'axios'
// import { useEffect, useState } from 'react'
// import { Header } from '../components/Header'
// import './HomePage.css'

// export function HomePage() {
//   const [products, setProducts] = useState([])
//   const [cart, setCart] = useState([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     setLoading(true)

//     Promise.all([axios.get('/api/products'), axios.get('/api/cart-items')])
//       .then(responses => {
//         // Verificação para garantir que a resposta de produtos é um array
//         const productsData = Array.isArray(responses[0].data)
//           ? responses[0].data
//           : []
//         setProducts(productsData)

//         // Verificação para garantir que a resposta do carrinho é um array
//         const cartData = Array.isArray(responses[1].data)
//           ? responses[1].data
//           : []
//         setCart(cartData)
//       })
//       .catch(error => {
//         console.error('Erro ao buscar dados:', error)
//         // Em caso de erro, garantimos que os estados sejam arrays vazios
//         setProducts([])
//         setCart([])
//       })
//       .finally(() => {
//         setLoading(false)
//       })
//   }, [])

//   return (
//     <>
//       <title>Pierce Bold</title>
//       <Header cart={cart} />
//       <div className='home-page'>
//         <div className='products-grid'>
//           {loading ? (
//             <p>Carregando produtos...</p>
//           ) : products.length > 0 ? (
//             products.map(product => {
//               return (
//                 <div key={product.id} className='product-container'>
//                   <div className='product-image-container'>
//                     <img className='product-image' src={product.image} />
//                   </div>

//                   <div className='product-name limit-text-to-2-lines'>
//                     {product.name}
//                   </div>

//                   <div className='product-rating-container'>
//                     <img
//                       className='product-rating-stars'
//                       src={`images/ratings/rating-${
//                         product.rating.stars * 10
//                       }.png`}
//                     />
//                     <div className='product-rating-count link-primary'>
//                       {product.rating.count}
//                     </div>
//                   </div>

//                   <div className='product-price'>
//                     ${(product.priceCents / 100).toFixed(2)}
//                   </div>

//                   <div className='product-quantity-container'>
//                     <select>
//                       <option value='1'>1</option>
//                       <option value='2'>2</option>
//                       <option value='3'>3</option>
//                       <option value='4'>4</option>
//                       <option value='5'>5</option>
//                       <option value='6'>6</option>
//                       <option value='7'>7</option>
//                       <option value='8'>8</option>
//                       <option value='9'>9</option>
//                       <option value='10'>10</option>
//                     </select>
//                   </div>

//                   <div className='product-spacer'></div>

//                   <div className='added-to-cart'>
//                     <img src='images/icons/checkmark.png' />
//                     Added
//                   </div>

//                   <button className='add-to-cart-button button-primary'>
//                     Add to Cart
//                   </button>
//                 </div>
//               )
//             })
//           ) : (
//             <p>Nenhum produto encontrado.</p>
//           )}
//         </div>
//       </div>
//     </>
//   )
// }
