import { useContext, useState, useEffect, useTransition, Fragment } from 'react'
import { CategoriesContext } from '../../context.apis/categories_context/categories_context';
import ProductCardDirectory from '../../components/product_card/product_card_component';
import SearchBox from '../../components/seaarchbox/searchbox.component';
import CategoryAdvert from '../../components/category_advert/category_advert.componet';

const InventoryPreview = () => {
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
    <div className='inventory-preview-container'>
      {/* <div className='search_box_conatiner'>
        <SearchBox type="search" placeholder={'search for an item'} onChange={deviceSearch} />
      </div> */}
      {Object.keys(MappedCategories).map((title) => {
        const product = MappedCategories[title];
        return <CategoryAdvert key={title} title={title} product={product} />
      })}
    </div>

  )

}
export default InventoryPreview;