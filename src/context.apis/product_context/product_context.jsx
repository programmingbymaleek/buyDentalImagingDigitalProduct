import { createContext, useState, useEffect } from 'react'
import DentalProduct from '../../shop_data_json_file/shop_data_file';
import { uploadDataCollections } from '../../dependences/firebase/firebase';


export const ProductContext = createContext({
  products: [],
})

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const value = { products }

  useEffect(() => {
    uploadDataCollections('species', 'EquipmentType', DentalProduct)
  }, [])

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}