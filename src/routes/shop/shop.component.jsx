import { useContext } from "react";
import { ProductsContext } from "../../contexts/product.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  console.log(products);
  return (
    <div className="products-container">
      {products.map(({ id, name, price, imageUrl }) => {
        return (
          <ProductCard key={id} name={name} price={price} imageUrl={imageUrl} />
        );
      })}
    </div>
  );
};

export default Shop;
