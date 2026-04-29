//createContext is used to create a global data
import { createContext, useState, useContext } from "react";
import { getProductById } from "../data/products";

const CartContext = createContext(null); //creating a context

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]); //List of cart items having an {id:2, quantity:7}

  function addToCart(productId) {
    const exisiting = cartItems.find((item) => item.id === productId);

    if (exisiting) {
      const currentQuantity = exisiting.quantity;

      const updatedCartItems = cartItems.map((item) =>
        item.id === productId
          ? { id: productId, quantity: currentQuantity + 1 }
          : item,
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { id: productId, quantity: 1 }]);
    }
  }

  function getCartItemsWithProducts() {
    return cartItems
      .map((item) => ({ ...item, product: getProductById(item.id) }))
      .filter((item) => item.product);
  }

  function revomeFromCart(productId) {
    setCartItems(cartItems.filter((item) => item.id != productId));
  }

  function updateQuantity(productId, quantity) {
    if (quantity <= 0) {
      revomeFromCart(productId);
      return;
    }

    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item,
      ),
    );
  }

  function getCartTotal() {
    const total = cartItems.reduce((total, item) => {
      const product = getProductById(item.id);
      return total + (product ? product.price * item.quantity : 0);
    }, 0);
    return total;
  }

  function clearCart() {
    setCartItems([]);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        getCartItemsWithProducts,
        revomeFromCart,
        updateQuantity,
        getCartTotal,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;

//this is useull coz we dont import AuthContext and use this fucntion instead
export function useCart() {
  const context = useContext(CartContext);

  return context;
}
