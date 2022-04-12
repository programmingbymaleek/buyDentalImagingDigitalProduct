import CustomButton from "../button.component/button.component";
import './product_card.scss';
const ProductCardDirectory = ({ product }) => {
  const { name, imageUrl, price } = product;


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
    <CustomButton buttonType={'inverted'} label="Add to Cart" />
  </div>);
}
export default ProductCardDirectory

