import { useContext, useState, useEffect, useTransition, Fragment } from 'react'
import { CategoriesContext } from '../../context.apis/categories_context/categories_context';
import ProductCardDirectory from '../../components/product_card/product_card_component';
import SearchBox from '../../components/seaarchbox/searchbox.component';


import './shop.styles.scss'
const Shop = () => {
  const { MappedCategories } = useContext(CategoriesContext)
  // const [searchField, setsearchField] = useState('')
  // const [filteredDevices, setFilteredDevices] = useState(MappedCategories);

  // const [isPending, startTransition] = useTransition()

  // const deviceSearch = (e) => {
  //   startTransition(() => {
  //     setsearchField(`${e.target.value.toLocaleLowerCase()}`)
  //   })
  // }

  // useEffect(() => {
  //   const kme = Object.values(MappedCategories);
  //   console.log(kme)
  //   const newfilteredDevices = Object.values(MappedCategories).map((itemValue) => {
  //     return itemValue.filter((item) => {
  //       return (item.name.toLocaleLowerCase().includes(searchField))
  //     })
  //   })
  //   console.log(newfilteredDevices)
  //   setFilteredDevices(newfilteredDevices)
  // }, [searchField, MappedCategories])



  return (
    <Fragment>
      {/* <div className='search_box_conatiner'>
        <SearchBox type="search" placeholder={'search for an item'} onChange={deviceSearch} />
      </div> */}
      {Object.keys(MappedCategories).map((title) => (
        <Fragment key={title}>
          <h2>{title.toUpperCase()}</h2>
          <div className='products-container'>
            {/* <div>
              {isPending && <p style={{ color: 'red' }}>Updating List please wait...</p>}
            </div> */}
            {MappedCategories[title].map((product) => {
              return (<div className='devices' key={product.id}>
                <ProductCardDirectory product={product} />
              </div>)
            })}
          </div>
        </Fragment>

      ))}
      <div>

      </div>
    </Fragment>

  )

}
export default Shop;