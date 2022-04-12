import { useContext, useState, useEffect } from 'react'
import { ProductContext } from '../../context.apis/product_context/product_context';
import ProductCardDirectory from '../../components/product_card/product_card_component';
import SearchBox from '../../components/seaarchbox/searchbox.component';
import './shop.styles.scss'
const Shop = () => {
  const { products } = useContext(ProductContext)
  const [searchField, setsearchField] = useState('')
  const [filteredDevices, setFilteredDevices] = useState(products)
  console.log(filteredDevices)



  const deviceSearch = (e) => {
    setsearchField(`${e.target.value.toLocaleLowerCase()}`)
  }

  useEffect(() => {
    const newfilteredDevices = products.filter((product) => {
      console.log(product.name.toLocaleLowerCase())
      return (product.name.toLocaleLowerCase().includes(searchField))
    })
    setFilteredDevices(newfilteredDevices)

  }, [searchField, products])




  return (<div className='products-container'>
    <div className='search_box_conatiner'>
      <SearchBox type="search" placeholder={'search for an item'} onChange={deviceSearch} />
    </div>
    {filteredDevices.map((product) => {
      return (<div className='devices' key={product.id}>
        <ProductCardDirectory product={product} />
      </div>)
    })}

  </div>)
}
export default Shop;