import { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoryContext } from "../../contexts/product.context";
import { CategoryContainer, CategoryTitle } from "./category.styles.jsx";

const Category = () => {
  const { categoriesMap } = useContext(CategoryContext);
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map(({ id, name, imageUrl, price }) => (
            <ProductCard
              key={id}
              id={id}
              name={name}
              imageUrl={imageUrl}
              price={price}
            />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
