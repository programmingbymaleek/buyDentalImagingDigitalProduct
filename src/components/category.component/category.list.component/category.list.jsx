import CategoryItem from "../category.item.component/category.item";
import './category.style.scss';
const CategoryItems = ({ primemill, op3d, intraoral, deleveryunit, accessories }) => {
  const categoryList = [
    {
      id: 1,
      title: 'Panoramic x-rays',
      imageUrl: op3d
    },
    {
      id: 2,
      title: 'intra-oral x-rays',
      imageUrl: intraoral

    },
    {
      id: 3,
      title: 'Milling unit',
      imageUrl: primemill
    },
    {
      id: 4,
      title: 'delivery units',
      imageUrl: deleveryunit
    },
    {
      id: 5,
      title: 'Dental Accessories',
      imageUrl: accessories

    }
  ]
  return (<div className="categories-container">
    {categoryList.map((item) => {
      return (<CategoryItem item={item} key={item.id} />)
    })}
  </div>);
}

export default CategoryItems; 