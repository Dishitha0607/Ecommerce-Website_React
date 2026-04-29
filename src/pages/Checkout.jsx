import { useCart } from "../context/CartContext";

function Checkout() {
  const {
    getCartItemsWithProducts,
    updateQuantity,
    revomeFromCart,
    getCartTotal,
    clearCart,
  } = useCart();

  const cartItems = getCartItemsWithProducts();
  const total = getCartTotal();

  function placeOrder() {
    alert("Successful Order!");
    clearCart();
  }

  return (
    <>
      <div className="page">
        <div className="container">
          <h1 className="page-title">Checkout Working</h1>
          <div className="checkout-container">
            <div className="checkout-items" key={item.id}>
              <h2 className="checkout-section-title">Order Summury</h2>
              {cartItems.map((item) => (
                <div key={item.id} className="checkout-item">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="checkout-item-image"
                  />
                  <div className="chekout-item-details">
                    <h3 className="checkout-item-name">{item.product.name}</h3>
                    <p className="checkout-item-price">
                      ${item.product.price} (each)
                    </p>
                  </div>
                  <div className="checkout-item-controls">
                    <div className="quantity-controls">
                      <button
                        className="quantity-btn"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <span className="quantity-value">{item.quantity}</span>
                      <button
                        className="quantity-btn"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>

                    <p className="checkout-item-total">
                      {" "}
                      Total: ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      className="btn btn-secondary btn-small"
                      onClick={() => revomeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="checkout-summury">
              <h2 className="checkout-section-title">Toal</h2>
              <div className="checkout-total">
                <p className="checkout-total-label">Subtotal:</p>
                <p className="checkout-total-value">${total.toFixed(2)}</p>
              </div>

              <div className="checkout-total">
                <p className="checkout-total-label">Total:</p>
                <p className="checkout-total-value checkout-total-final">
                  ${total.toFixed(2)}
                </p>
              </div>

              <button
                onClick={() => {
                  placeOrder();
                }}
                className="btn btn-primary btn-large btn-block"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
