// Cart.js

import React, { useState } from "react";

const Cart = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 15 },
    // Add more items as needed
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  const totalAmount = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">Shopping Cart</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Product List */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Products</h2>
          <ul>
            {items.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center mb-2"
              >
                <span>{item.name}</span>
                <button
                  onClick={() => addToCart(item)}
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                  Add to Cart
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Cart */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Shopping Cart</h2>
          <ul>
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center mb-2"
              >
                <span>{item.name}</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-4">
            <strong>Total: ${totalAmount}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
