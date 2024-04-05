import CartItem from './CartItem';

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map(item => (
          <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
        ))
      )}
    </div>
  );
};

export default Cart;
