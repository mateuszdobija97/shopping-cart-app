import React from 'react';
import { formatCurrency } from '../../util/formatCurrency';

const Cart = ({ cartItems, removeFromCart }) => {

    const renderedList = cartItems.map(item => (
        <li className="cart-items__item" key={item._id}>
            <div className="cart-items__image-container">
                <img src={item.image} alt={item.title} className="cart-items__image"/>
            </div>
            <div className="cart-items__about">
                <div className="cart-items__title">{ item.title }</div>
                <div className="cart-items__details">
                    <p className="cart-items__price">
                        {`${formatCurrency(item.price)} x ${item.count}`}
                    </p>
                    <button className="cart-items__btn-remove btn" onClick={() => removeFromCart(item)}>
                        Remove
                    </button>
                </div>
            </div>
        </li>
    ))

    const totalPrice = `Total: ${formatCurrency(cartItems.reduce((a, c) => a + c.price * c.count, 0))}`;


    const renderedTotal = cartItems.length > 0 ? (<div className="cart-items__total-container">
        <div className="cart-items__total-price">
            { totalPrice }
        </div>
        <button className="btn cart-items__total-btn">
            Proceed
        </button>
        </div>) : 
        null;

    return ( 
        <div className="cart-items">
            <div className="cart-items__header">
                Items in cart: {cartItems.length}
            </div>
            <div className="cart-items__main">
                <ul className="cart-items__ul">
                    {renderedList}
                </ul>
                { renderedTotal }
            </div>
        </div>
     );
}
 
export default Cart;