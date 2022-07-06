import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductCard from "../../components/product-card/product-card.component";
import {
  categoriesSelector,
  selectCategoriesIsLoading,
} from "../../store/categories/categories.selector";
import { CategoryContainer, CategoryTitle } from "./category.styles.jsx";
import Spinner from "../../components/spinner/spinner.component";

const Category = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const categoriesMap = useSelector(categoriesSelector);
  const isLoading = useSelector(selectCategoriesIsLoading);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      {!isLoading ? (
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
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Category;
