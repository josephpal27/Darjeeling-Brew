import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Helper to clamp quantity
  const clampQty = (qty) => Math.min(10, Math.max(1, qty));

  // Add to Cart
  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find(
        (p) =>
          p.productId === item.productId &&
          p.variant.weight === item.variant.weight
      );

      if (existing) {
        return prev.map((p) =>
          p.productId === item.productId &&
          p.variant.weight === item.variant.weight
            ? {
                ...p,
                quantity: clampQty(p.quantity + item.quantity),
              }
            : p
        );
      }

      return [
        ...prev,
        {
          ...item,
          quantity: clampQty(item.quantity),
        },
      ];
    });
  };

  // Update Quantity (cart + checkout safe)
  const updateQty = (index, qty) => {
    setCart((prev) =>
      prev.map((item, i) =>
        i === index
          ? { ...item, quantity: clampQty(qty) }
          : item
      )
    );
  };

  const removeItem = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQty, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);