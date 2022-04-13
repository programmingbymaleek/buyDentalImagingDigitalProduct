import './cart.items.styles.scss'

const CartItems = ({ catItems }) => {
  const { name, imageUrl, quantity, price } = catItems;

  return (<div className='cart-item-container'>
    <img src={imageUrl} alt={name} />
    <div className='item-details'>
      <span className='name'>{name}</span>
      <span className='price'>{quantity} x {price}
      </span>

    </div>


  </div>)

}
export default CartItems