import { Link } from "react-router-dom";
import {
  CategoryPreviewContainer,
  Preview,
  Title,
} from "./category-preview.styles";
import ProductCard from "../../components/product-card/product-card.component";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Link to={`/shop/${title}`}>
          <Title>{title.toUpperCase()} &#10142;</Title>
        </Link>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map(({ id, name, price, imageUrl }) => (
            <ProductCard
              key={id}
              id={id}
              name={name}
              price={price}
              imageUrl={imageUrl}
            />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
