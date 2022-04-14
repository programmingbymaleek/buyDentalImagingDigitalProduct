import { useContext } from 'react'
import { CartUserContext } from '../../context.apis/cart_context/cart_context';

const CheckOut = () => {
  const { cartItems, addItemTocart, removeItemFromCart } = useContext(CartUserContext)

  //decrement the quanity, update price and update quantity
  //increment the quatity, update price and updat quantity 




  return (<div>
    {cartItems.map((cartItem) => {
      let { ImageUrl, price, quantity, name, id } = cartItem
      let totalCost = quantity * price;
      return (<div key={id}>
        <div>
          <span>{name}   </span>
          <button type='button' onClick={() => {
            removeItemFromCart(cartItem)
          }}>decrease quanity</button>
          <span>   {quantity}  </span>
          <button type='button' onClick={() => {
            addItemTocart(cartItem)
          }}>increase quanity</button>
          <span>{totalCost}   </span>
        </div>
      </div>)


    })}
  </div>)
}

export default CheckOut;




// const { ImageUrl, price, quantity, name, id } = cartItem
// const totalCost = quantity * price
// return (
//   <div key={id}>
//     <span>{name}   </span>
//     <button type='button' onClick={() => {
//       removeItemFromCart(cartItem)
//     }}>decrease quanity</button>
//     <span>   {quantity}  </span>
//     <button type='button' onClick={() => {
//       addItemTocart(cartItem)
//     }}>increase quanity</button>
//     <span>    {totalCost}   </span>

//   </div>)