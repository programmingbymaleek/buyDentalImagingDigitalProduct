import './inventory.component.scss'
import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect, useTransition } from 'react';
import { CategoriesContext } from '../../context.apis/categories_context/categories_context';
import ProductCardDirectory from '../../components/product_card/product_card_component';
import SearchBox from '../../components/seaarchbox/searchbox.component';

const Inventory = () => {
  const { inventory } = useParams();
  const { MappedCategories } = useContext(CategoriesContext);
  const [product, setProducts] = useState(MappedCategories[inventory]);
  const [filteredDevices, setFilteredDevices] = useState(product);
  const [isPending, startTransition] = useTransition();
  const [searchField, setsearchField] = useState('')

  const deviceSearch = (e) => {
    startTransition(() => {
      setsearchField(`${e.target.value.toLocaleLowerCase()}`)
    })
  }


  useEffect(() => {
    const newfilteredDevices = product.filter((filtered) => (
      filtered.name.toLocaleLowerCase().includes(searchField)
    ))
    setFilteredDevices(newfilteredDevices)
  }, [searchField, MappedCategories])



  useEffect(() => {
    setProducts(MappedCategories[inventory])
  }, [inventory, MappedCategories]);


  return (
    <> <h2 className='title'>{inventory.toUpperCase()}</h2>
      <SearchBox type='search' placeholder={`search for ${inventory}`} onChange={deviceSearch} />
      <div className='inventory-container'>
        {filteredDevices &&
          filteredDevices.map((product) => <ProductCardDirectory key={product.id} product={product} />)
        }
      </div>
    </>
  )

}

export default Inventory; 