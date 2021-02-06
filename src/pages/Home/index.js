import React, {useState} from 'react';
import './home.css';
import {useSelector} from 'react-redux';
import { useHistory } from "react-router-dom";
import Modal from 'react-modal';


const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width                 : 550
    }
  };

function Home() {
    const products = useSelector(state => state.products);
    let history = useHistory();
    const [modalIsOpen,setIsOpen] = useState(false);

    const handleToCart = (product) => {
        setIsOpen(true)
        console.log(product)
    }

    return (
        <div className="wrapper">
            {
                products.map(product => 
                    // <div className="d-play" key={product.id} onClick={() => history.push(`/details/${product.id}`)}>
                    <div className="d-play" key={product.id}>
                        <img src={product.image} width={255} height={250} alt="product" />
                        <div className="title">{product.name}</div>
                        <h4>Rp. {product.price}</h4>
                        {/* <button onClick={() => console.log(product)}>Add to cart</button> */}
                        <button onClick={handleToCart}>Add to cart</button>
                    </div>)
            }
            <Modal isOpen={modalIsOpen} style={customStyles}>
                <h2>Modal Title</h2>
                <div onClick={() => setIsOpen(false)}>X</div>
            </Modal>
            
        </div>
    )
}


export default Home;
