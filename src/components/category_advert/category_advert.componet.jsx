import './category_adverts.styles.scss'
import ProductCardDirectory from '../../components/product_card/product_card_component';

const CategoryAdvert = ({ title, product }) => {
  return (
    <div className='category-advert-container'>
      <h2>
        <span className='title'>
          {title.toUpperCase()}
        </span>
      </h2>
      <div className='advert'>
        {
          product.filter((_, index) => index < 4).map((advertProduct) =>
            <ProductCardDirectory key={advertProduct.id} product={advertProduct} />
          )
        }


      </div>

    </div>
  )

}

export default CategoryAdvert; 