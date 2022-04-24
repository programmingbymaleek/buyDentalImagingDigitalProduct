import { createContext, useState, useEffect } from 'react'
import DentalProduct from '../../shop_data_json_file/shop_data_file';
import { uploadDataCollections, getDataAndCollectionFromFireBase } from '../../dependences/firebase/firebase';


export const CategoriesContext = createContext({
  MappedCategories: {},
})

export const CategoriesProvider = ({ children }) => {
  const [MappedCategories, setMappedCategories] = useState({})
  const value = { MappedCategories }

  // useEffect(() => {
  //   uploadDataCollections('species', DentalProduct)
  // }, [])

  const getDataAndCollectionFromFireBasE = async () => {
    const MappedCategory = await getDataAndCollectionFromFireBase();
    console.log(MappedCategory)
    setMappedCategories(MappedCategory);
  }

  useEffect(() => {
    getDataAndCollectionFromFireBasE();
  }, [])

  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}