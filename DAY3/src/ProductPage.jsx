import React from 'react';
import './App.css';
import { useParams } from "react-router-dom";


export const ProductPage = (props) => {
    const { getProductById } = props;
    const params = useParams();
    const { productId } = params;
    
    const product = getProductById(productId);
    
    if (!product) {
        return (
            <div>
                <h3>Product with id: "{productId}" is not found</h3>
            </div>
        );
    }
    
    const { id, name, price } = product;
    
    return (
        <h2>This is {name} with the id of {id} and a price of {price}$</h2>
    )
}