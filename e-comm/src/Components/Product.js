

const Product = ({ product, onAddToCart }) => {
  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <img src={product.image} alt="product"/>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;
