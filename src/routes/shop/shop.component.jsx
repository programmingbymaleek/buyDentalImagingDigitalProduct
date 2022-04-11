import { useContext } from 'react'
import { ProductContext } from '../../context.apis/product_context/product_context';
import ProductCardDirectory from '../../components/product_card/product_card_component';
import './shop.styles.scss'
const Shop = () => {
  const { products } = useContext(ProductContext)

  return (<div className='products-container'>
    {products.map((product) => {
      return (<div key={product.id}>
        <ProductCardDirectory product={product} />
      </div>)
    })}

  </div>)
}
export default Shop;