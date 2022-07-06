import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { categoriesSelector } from "../../store/categories/categories.selector";
import { fetchCategoriesStart } from "../../store/categories/categories.action";

const Shop = () => {
  const dispatch = useDispatch();
  const categoriesMap = useSelector(categoriesSelector);

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);
  return (
    <Routes>
      <Route
        index
        element={<CategoriesPreview categoriesMap={categoriesMap} />}
      />
      <Route
        path=":category"
        element={<Category categoriesMap={categoriesMap} />}
      />
    </Routes>
  );
};

export default Shop;
