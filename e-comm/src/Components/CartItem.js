

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="cart-item">
      <p>{item.name}</p>
      <p>{item.price}</p>
      <img src={item.image} alt="product"/>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;
