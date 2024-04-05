import Cart from './Cart';

const CartPage = ({ cart, removeFromCart }) => {
  const totalSum = cart.reduce((acc, item) => acc + parseFloat(item.price), 0).toFixed(2);

  return (
    <div className="cart-page">
      <h2>Cart</h2>
      <Cart cart={cart} removeFromCart={removeFromCart} />
      <p>Total: ${totalSum}</p>
    </div>
  );
};

export default CartPage;
