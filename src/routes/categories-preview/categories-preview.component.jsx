import { Fragment } from "react";
import { useSelector } from "react-redux";

import "./categories-preview.styles.scss";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import {
  categoriesSelector,
  selectCategoriesIsLoading,
} from "../../store/categories/categories.selector";
import Spinner from "../../components/spinner/spinner.component";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(categoriesSelector);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <Fragment>
      {!isLoading ? (
        Object.keys(categoriesMap).map((title) => {
          const productsMap = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={productsMap} />
          );
        })
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
