import { Fragment, useContext } from "react";
import { CategoryContext } from "../../contexts/product.context";

import "./categories-preview.styles.scss";
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoryContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const productsMap = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={productsMap} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
