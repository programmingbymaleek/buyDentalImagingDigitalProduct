import CategoryItems from "../../components/category.component/category.list.component/category.list";

const Home = ({ primemill, op3d, intraoral, deleveryunit, accessories }) => {
  return (
    <div className="App">
      <CategoryItems
        primemill={primemill}
        op3d={op3d}
        intraoral={intraoral}
        deleveryunit={deleveryunit}
        accessories={accessories}
      />

    </div>

  );
}

export default Home;