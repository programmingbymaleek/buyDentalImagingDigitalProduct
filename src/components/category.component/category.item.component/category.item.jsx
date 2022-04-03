const CategoryItem = ({ item }) => {

  return (<div className="category-container">
    <div className="background-image" style={{ backgroundImage: `url(${item.imageUrl})` }} />
    <div className="category-body-container">
      <h2>{item.title.toUpperCase()}</h2>
      <p>Shop Item Now</p>
    </div>

  </div>);
}
export default CategoryItem; 