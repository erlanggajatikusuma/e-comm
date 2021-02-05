import React from 'react';
import './cart.css';
import {useSelector, useDispatch} from 'react-redux';


function Cart() {
    const counter = useSelector(state => state.counter);
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    return (
        <div>
            <div className="cart-wrapper">
                <div className="d-prod">
                    <h4>Display Product</h4>
                    {
                        products.map(product => <p key={product.id}>{product.name}</p>)
                    }
                </div>
                <div className="price">
                    <h1>Total: {counter} </h1>
                    <button onClick={(() => dispatch({type: 'INCREMENT'}))}>INCREMENT</button>
                    <button onClick={(() => dispatch({type: 'DECREMENT'}))}>DECREMENT</button>
                </div>
            </div>
        </div>
    )
}

export default Cart
