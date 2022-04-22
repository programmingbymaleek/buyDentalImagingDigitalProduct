import { createContext, useState, useEffect } from 'react'
import DentalProduct from '../../shop_data_json_file/shop_data_file';
import { uploadDataCollections, getDataAndCollectionFromFireBase } from '../../dependences/firebase/firebase';


export const ProductContext = createContext({
  products: [],
})

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const value = { products }

  useEffect(() => {
    uploadDataCollections('species', 'EquipmentType', DentalProduct)
  }, [])

  // const getDataAndCollectionFromFireBasE = async () => {
  //   const MappedCategory = await getDataAndCollectionFromFireBase();
  //   console.log(MappedCategory)
  // }

  // useEffect(() => {
  //   getDataAndCollectionFromFireBasE();
  // }, [])

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}