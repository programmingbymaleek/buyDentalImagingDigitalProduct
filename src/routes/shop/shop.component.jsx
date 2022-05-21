import { Routes, Route } from 'react-router-dom'
import InventoryPreview from '../inventory_preview/inventory_preview'
import Inventory from '../inventory/inventory.component'
const Shop = () => {
  return (
    <Routes>
      <Route index={true} element={<InventoryPreview />} />
      <Route path=':inventory' element={<Inventory />} />
    </Routes>

  )

}
export default Shop;