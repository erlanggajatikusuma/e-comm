import React from 'react';
import './home.css';
import {useSelector} from 'react-redux';
import { useHistory } from "react-router-dom";


function Home() {
    const products = useSelector(state => state.products);
    let history = useHistory();
    return (
        <div className="wrapper">
            {
                products.map(product => 
                    // <div className="d-play" key={product.id} onClick={() => history.push(`/details/${product.id}`)}>
                    <div className="d-play" key={product.id}>
                        <img src={product.image} width={255} height={250} alt="product" />
                        <div className="title">{product.name}</div>
                        <h4>Rp. {product.price}</h4>
                        <button onClick={() => console.log(product)}>Add to cart</button>
                    </div>)
            }
            
        </div>
    )
}


export default Home;
