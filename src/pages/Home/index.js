import React from 'react';
import './home.css';
import {useSelector} from 'react-redux';


function Home() {
    const products = useSelector(state => state.products);
    return (
        <div className="wrapper">
            {
                products.map(product => <div className="d-play" key={product.id}>
                        <div className="title">{product.name}</div>
                        <h4>Rp. {product.price}</h4>
                    </div>)
            }
        </div>
    )
}

export default Home
