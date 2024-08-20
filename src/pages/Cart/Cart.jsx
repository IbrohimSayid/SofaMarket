import React, { useState, useEffect } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("bag")) || [];
    setCartItems(storedItems);
  }, []);

  const removeItem = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
    localStorage.setItem("bag", JSON.stringify(updatedItems));
  };

  const updateQuantity = (id, quantity) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: Number(quantity) } : item
    );
    setCartItems(updatedItems);
    localStorage.setItem("bag", JSON.stringify(updatedItems));
  };

  const calculateTotal = () => {
    const subtotal = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const shipping = 5 * 100; // Assuming shipping cost is in cents
    const tax = subtotal * 0.1;
    const total = subtotal + shipping + tax;

    return {
      subtotal,
      shipping,
      tax,
      total,
    };
  };

  const totals = calculateTotal();

  if (cartItems.length === 0) return <div>Savat bo'sh</div>;

  return (
    <>
      <div className="main-container bg-slate-50 py-20">
        <div className="container mx-auto max-w-6xl px-8">
          <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center border-b py-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-32 h-32 rounded-lg"
              />
              <div className="ml-4 flex-1">
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p>{item.modifier}</p>
                <p>
                  Color:{" "}
                  <span
                    className="inline-block w-4 h-4 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></span>
                </p>
                <div className="flex items-center mt-2">
                  <span>Amount: </span>
                  <select
                    className="ml-2"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, e.target.value)}
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold">
                  ${(item.price / 100).toFixed(2)}
                </p>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 mt-4"
                >
                  remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg">
              Subtotal: ${(totals.subtotal / 100).toFixed(2)}
            </p>
            <p className="text-lg">
              Shipping: ${(totals.shipping / 100).toFixed(2)}
            </p>
            <p className="text-lg">Tax: ${(totals.tax / 100).toFixed(2)}</p>
            <p className="text-2xl font-bold mt-4">
              Order Total: ${(totals.total / 100).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
