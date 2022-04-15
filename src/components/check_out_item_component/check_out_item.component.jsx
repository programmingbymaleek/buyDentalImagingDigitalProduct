import './check_out_item.scss'

const CheckOutItem = ({ cartItem, incrementItem, decrementItem, deletItem }) => {
  const { imageUrl, price, quantity, name } = cartItem
  // const totalCost = quantity * price;
  return (<div className='checkout-item-container '>
    <div className='image-container'>
      <img src={imageUrl} alt={`${name}`} />
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'>
      <div className='arrow' onClick={decrementItem}>&#10094; </div>
      <span className='value'> {quantity} </span>
      <div className='arrow' onClick={incrementItem}> &#10095;</div>
    </span>
    <span className='price'>{price}</span>
    <div className='remove-button' onClick={deletItem} >&#10005;</div>
  </div>)



}

export default CheckOutItem; 