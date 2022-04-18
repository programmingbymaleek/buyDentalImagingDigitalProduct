import { useContext, useState, useEffect, useTransition } from 'react'
import { ProductContext } from '../../context.apis/product_context/product_context';
import ProductCardDirectory from '../../components/product_card/product_card_component';
import SearchBox from '../../components/seaarchbox/searchbox.component';


import './shop.styles.scss'
const Shop = () => {
  const { products } = useContext(ProductContext)
  const [searchField, setsearchField] = useState('')
  const [filteredDevices, setFilteredDevices] = useState(products);

  const [isPending, startTransition] = useTransition()



  const deviceSearch = (e) => {
    startTransition(() => {
      setsearchField(`${e.target.value.toLocaleLowerCase()}`)
    })
  }

  useEffect(() => {
    const newfilteredDevices = products.filter((product) => {
      return (product.name.toLocaleLowerCase().includes(searchField))
    })
    setFilteredDevices(newfilteredDevices)

  }, [searchField, products])




  return (
    <div>
      <div className='products-container'>
        <div className='search_box_conatiner'>
          <SearchBox type="search" placeholder={'search for an item'} onChange={deviceSearch} />
        </div>
        <div>
          {isPending && <p style={{ color: 'red' }}>Updating List please wait...</p>}
        </div>
        {filteredDevices.map((product) => {
          return (<div className='devices' key={product.id}>
            <ProductCardDirectory product={product} />
          </div>)
        })}
      </div>
    </div>
  )

}
export default Shop;