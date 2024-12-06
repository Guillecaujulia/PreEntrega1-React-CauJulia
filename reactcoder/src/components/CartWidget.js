import React from 'react';
import './CartWidget.css';

function CartWidget() {

    const itemCount = 17;

    return (
    <div className="cart-widget">
        <i className="fas fa-shopping-cart cart-icon"></i>
        {itemCount > 0 && (
        <span className="cart-notification">{itemCount}</span>
    )}
    </div>
);
}

export default CartWidget;