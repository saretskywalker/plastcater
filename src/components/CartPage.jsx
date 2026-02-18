import React, { useState, useEffect } from 'react';
import { Trash2, Plus, Minus, ShoppingCart } from 'lucide-react';
import './CartPage.css';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    loadCart();

    const handleCartUpdated = () => {
      loadCart();
    };

    window.addEventListener('cartUpdated', handleCartUpdated);
    window.addEventListener('storage', handleCartUpdated);

    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdated);
      window.removeEventListener('storage', handleCartUpdated);
    };
  }, []);

  useEffect(() => {
    calculateSubtotal();
  }, [cartItems]);

  const loadCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(cart);
  };

  const calculateSubtotal = () => {
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    setSubtotal(total);
  };

  const handleRemoveItem = (releaseId) => {
    const updated = cartItems.filter(item => item.id !== releaseId);
    setCartItems(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const handleQuantityChange = (releaseId, newQuantity) => {
    if (newQuantity < 1) {
      handleRemoveItem(releaseId);
      return;
    }

    const updated = cartItems.map(item =>
      item.id === releaseId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to clear your cart?')) {
      setCartItems([]);
      localStorage.setItem('cart', JSON.stringify([]));
      window.dispatchEvent(new Event('cartUpdated'));
    }
  };

  const shipping = cartItems.length > 0 ? 10.99 : 0;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-header">
          <h1 className="cart-title">Shopping Cart</h1>
          <p className="cart-subtitle">{cartItems.length} items</p>
        </div>

        {cartItems.length > 0 ? (
          <div className="cart-content">
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="item-image">
                    <img src={item.image} alt={item.title} />
                  </div>

                  <div className="item-details">
                    <h3 className="item-title">{item.title}</h3>
                    <p className="item-artist">{item.artist}</p>
                    <p className="item-meta">{item.label} • {item.format}</p>
                  </div>

                  <div className="item-quantity">
                    <button
                      className="qty-btn"
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="qty-value">{item.quantity}</span>
                    <button
                      className="qty-btn"
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <div className="item-price">
                    <span className="price">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>

                  <button
                    className="item-remove"
                    onClick={() => handleRemoveItem(item.id)}
                    title="Remove from cart"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h3>Order Summary</h3>

              <div className="summary-row">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="summary-row">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>

              <div className="summary-row">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>

              <div className="summary-divider"></div>

              <div className="summary-total">
                <span>Total</span>
                <span className="total-price">${total.toFixed(2)}</span>
              </div>

              <button className="checkout-btn">
                <ShoppingCart size={20} />
                <span>Proceed to Checkout</span>
              </button>

              <button className="continue-shopping" onClick={() => window.location.href = '/'}>
                Continue Shopping
              </button>

              <button className="clear-cart" onClick={handleClearCart}>
                Clear Cart
              </button>
            </div>
          </div>
        ) : (
          <div className="empty-cart">
            <div className="empty-icon">
              <ShoppingCart size={80} />
            </div>
            <h2>Your Cart is Empty</h2>
            <p>Start adding vinyl records to your collection</p>
            <a href="/" className="continue-shopping-link">Back to Home</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;