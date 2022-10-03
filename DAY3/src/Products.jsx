import React from 'react'
import { Link } from "react-router-dom";
import './App.css'

export const Products = (props) => {
    const { products, increasePrice, decreasePrice, addToFavorites, deleteProduct } = props;

    return (
        <div>
            {products.map(({ id, name, price }) => (
                <div className='productContainer' key={id}>
                    <div className='productTitle'>
                        Name: {name} <br/>
                        Price: {price}$
                    </div>
                    <div className='productActions'>
                        <button className='productButton' onClick={() => increasePrice(id)}>Increase price</button>
                        <button className='productButton' onClick={() => decreasePrice(id)}>Decrease price</button>
                        <button className='productButton' onClick={() => addToFavorites(id)}>Add to favorites</button>
                        <button className='productButton'>
                            <Link className='productLink' to={`/products/${id}`}>To item</Link>
                        </button>
                        <button className='productButton'>
                            <Link className='productLink' to={`/edit/${id}`}>Edit Item</Link>
                        </button>
                        <button className='productButton' onClick={() => deleteProduct(id)}>Delete Item</button>
                    </div>
                </div>
            ))}
        </div>
  )
}