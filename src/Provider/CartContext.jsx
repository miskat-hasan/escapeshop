import React from "react";
import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();
import { useCheckoutPricing } from "../Hooks/useCheckoutPricing";

export const CartProvider = ({ children }) => {
  const [promo, setPromo] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [productionType, setProductionType] = useState("standard");
  const [shippingType, setShippingType] = useState("standard");
  const [shippingPriceDynamic, setShippingPriceDynamic] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const storedPromo = JSON.parse(localStorage.getItem("promo"));

    setCartItems(storedCart);
    if (storedPromo) setPromo(storedPromo);
  }, []);

  useEffect(() => {
    if (promo) {
      localStorage.setItem("promo", JSON.stringify(promo));
    } else {
      localStorage.removeItem("promo");
    }
  }, [promo]);

  const addToCart = item => {
    const exists = cartItems.find(i => i.product_id === item.product_id);
    if (exists) {
      toast.error("Item already in cart");
      return;
    }

    const updated = [...cartItems, item];
    setCartItems(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
    toast.success("Added to cart");
  };

  const updateQuantity = (id, type) => {
    const updated = cartItems.map(item => {
      if (item.id === id) {
        let newQty = type === "inc" ? item.quantity + 1 : item.quantity - 1;
        if (newQty < 1) newQty = 1;

        return {
          ...item,
          quantity: newQty,
          total_price: (
            item.base_price *
            newQty *
            ((100 - (item.discount || 0)) / 100)
          ).toFixed(2),
        };
      }
      return item;
    });

    setCartItems(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
  };

  const removeItem = id => {
    const updated = cartItems.filter(item => item.id !== id);
    setCartItems(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));

    if (updated.length === 0) {
      setPromo(null);
      localStorage.removeItem("promo");
    }
  };

  const updateInstruction = (id, newInstruction) => {
    const updated = cartItems.map(item =>
      item.id === id ? { ...item, instructions: newInstruction } : item,
    );

    setCartItems(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
  };

  const totalStickers = cartItems.reduce(
    (acc, item) => acc + (item.quantity || 0),
    0,
  );

  const totalQuantity = cartItems.length;

  const subtotal = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.total_price || 0),
    0,
  );

  // DISCOUNT ONLY ON SUBTOTAL
  const getDiscountAmount = () => {
    if (!promo) return 0;

    const type = promo.data.discount_type;
    const value = Number(promo.data.discount_value);

    if (type === "percent") {
      return subtotal * (value / 100);
    }

    if (type === "fixed") {
      return value;
    }

    return 0;
  };

  const discountAmount = getDiscountAmount();

  const { discountedSubtotal } = useCheckoutPricing({
    subtotal,
    discountAmount,
  });

  const clearCart = () => {
    setCartItems([]);
    setPromo(null);
    localStorage.removeItem("cartItems");
    localStorage.removeItem("promo");
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeItem,
        subtotal,
        totalStickers,
        totalQuantity,
        clearCart,
        setPromo,
        discountAmount,
        updateInstruction,
        promo,
        discountedSubtotal,
        setProductionType,
        shippingType,
        productionType,
        setShippingType,
        shippingPriceDynamic,
        setShippingPriceDynamic,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
