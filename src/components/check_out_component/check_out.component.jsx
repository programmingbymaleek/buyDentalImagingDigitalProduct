import { useContext } from 'react'
import { CartUserContext } from '../../context.apis/cart_context/cart_context';
import CheckOutItem from '../check_out_item_component/check_out_item.component';
import './checkout.styles.scss'

const CheckOut = () => {
  const { cartItems, addItemTocart, removeItemFromCart, deletItem, totalItem } = useContext(CartUserContext)


  return (<div className='checkout-container'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>Description</div>
      <div className='header-block'>Quantity</div>
      <div className='header-block'>Price</div>
      <div className='header-block'>Remove</div>
    </div>


    {cartItems.length > 0 ? (cartItems.map((cartItem) => {
      const incrementItem = () => {
        addItemTocart(cartItem)
      }
      const decrementItem = () => {
        removeItemFromCart(cartItem)
      }
      const itemTodelete = () => {
        deletItem(cartItem)
      }

      return <CheckOutItem key={cartItem.id} cartItem={cartItem}
        incrementItem={incrementItem} decrementItem={decrementItem} deletItem={itemTodelete} />

    })) : ((<div>
      <div>No item to check out</div>
    </div>))}
    <span className='total'>Total: {totalItem}</span>
  </div>)
}

export default CheckOut;



