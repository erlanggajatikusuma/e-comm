import React from 'react';
import {useSelector} from 'react-redux'

function Details(props) {
    const product = useSelector(state => state.products)
    return (
        <div>
            <h1>Details Page</h1>
            {
                product.map(p => {
                    return <h2>{p.name}</h2>
                })
            }
        </div>
    )
}


export default Details;
