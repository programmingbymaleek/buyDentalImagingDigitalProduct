import './check_out_item.scss'

const Check_Out_Item = ({ cartItem, incrementItem, decrementItem, deletItem }) => {
  const { imageUrl, price, quantity, name } = cartItem
  const totalCost = quantity * price;
  return (<div className='checkout-item-container '>
    <div className='image-container'>
      <img src={imageUrl} alt={`${name}`} />
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'>{quantity}</span>
    <span className='price'>{price}</span>
    <div className='remove-button' onClick={deletItem} >&#10005;</div>
    {/* <div>
      <button type='button' onClick={() => {
        decrementItem(cartItem)
      }}>decrease quanity</button>
      <button type='button' onClick={() => {
        incrementItem(cartItem)
      }}>increase quanity</button>
    </div> */}
  </div>)


  return ('div')
}

export default Check_Out_Item; 