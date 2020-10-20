import React, { Component } from 'react';
import formateCurrency from '../utils'

export default class cart extends Component {
    render() {

        const { cartItems } = this.props;
        return (
            <div>
                <div>
                    {cartItems.length === 0 ? (
                        <div className="cart cart-header"> Cart is  empty </div>
                    ) : (
                            <div className="cart cart-header">You have {cartItems.length} in the cart</div>
                        )}
                </div>
                <div className="cart">
                    <ul className="cart-items">
                        {cartItems.map(item => (
                            <li key={cartItems.key}>
                                <div>
                                    <img src={item.image} alt={item.title} />
                                </div>

                                <div>
                                    <div>{item.title}</div>
                                    <div className="right">
                                        {formateCurrency(item.price)} X {item.count} {" "}
                                        <button className="button" onClick={() => { this.props.removeFromCart(item) }}>Remove</button>
                                    </div>
                                </div>

                            </li>
                        ))}
                    </ul>
                </div>

                {cartItems.length !== 0 && (
                    <div className="cart">
                        <div className="total">
                            <div>
                                Total : {""}
                                {formateCurrency(cartItems.reduce((a, c) => a + c.price * c.count ,0)
                                )}
                            </div>
                            <button className="button primary">Proceed</button>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}
