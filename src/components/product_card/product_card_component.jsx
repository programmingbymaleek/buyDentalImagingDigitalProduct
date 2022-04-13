import CustomButton from "../button.component/button.component";
import './product_card.scss';
import { useContext } from "react";
import { CartUserContext } from "../../context.apis/cart_context/cart_context";
const ProductCardDirectory = ({ product }) => {
  const { name, imageUrl, price } = product;

  const { addItemTocart } = useContext(CartUserContext)
  const addItemToyourCart = () => {
    return addItemTocart(product)
  }

  return (<div className="product-card-container">
    <img src={imageUrl} alt={name} />
    <div className="footer">
      <span className="name">
        {name}
      </span>
      <span className="price">
        {price}
      </span>
    </div>
    <CustomButton buttonType={'inverted'} label="Add to Cart" onClick={addItemToyourCart} />
  </div>);
}
export default ProductCardDirectory

