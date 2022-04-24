import { useContext, useState, useEffect, useTransition, Fragment } from 'react'
import { CategoriesContext } from '../../context.apis/categories_context/categories_context';
import ProductCardDirectory from '../../components/product_card/product_card_component';
import SearchBox from '../../components/seaarchbox/searchbox.component';


import './shop.styles.scss'
const Shop = () => {
  const { MappedCategories } = useContext(CategoriesContext)
  const [searchField, setsearchField] = useState('')
  const [filteredDevices, setFilteredDevices] = useState(MappedCategories);

  const [isPending, startTransition] = useTransition()

  // console.log(Object.values(MappedCategories))
  // const k = Object.values(MappedCategories).map((el) => {
  //   return el.map((el) => {
  //     console.log(el.name)
  //   });
  // })

  // // k.map((e) => {
  // //   return e.map((el) => {
  // //     console.log(el.name)
  // //   })
  // // })

  const deviceSearch = (e) => {
    startTransition(() => {
      setsearchField(`${e.target.value.toLocaleLowerCase()}`)
    })
  }

  useEffect(() => {
    const newfilteredDevices = Object.values(MappedCategories).map((itemValue) => {
      return itemValue.filter((item) => {
        return (item.name.toLocaleLowerCase().includes(searchField))
      })
    })






    setFilteredDevices(newfilteredDevices)
  }, [searchField, MappedCategories])


  const obj = {
    prop1: 'val1',
    prop2: 'val2'
  };

  const result = Object.keys(obj).map((key) => [key, obj[key]]);
  console.log(result);



  return (
    <Fragment>
      <div className='search_box_conatiner'>
        <SearchBox type="search" placeholder={'search for an item'} onChange={deviceSearch} />
      </div>
      {Object.keys(filteredDevices).map((title) => (
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className='products-container'>
            <div>
              {isPending && <p style={{ color: 'red' }}>Updating List please wait...</p>}
            </div>
            {filteredDevices[title].map((product) => {
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