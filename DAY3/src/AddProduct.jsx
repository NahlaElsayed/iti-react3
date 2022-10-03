import React, { useState } from 'react';
import './App.css';
import { useNavigate } from "react-router-dom";
const joi = require('joi');

export const AddProduct = props => {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        errors: {}
    });

    const { addProduct } = props;
    const navigate = useNavigate();
    const schema = joi.object({
        name: joi.string()
            .alphanum()
            .min(5)
            .required()
            .label('12'),

        price: joi.string()
            .required()
            .label('2'),

        errors: joi.object()
    });

    const changeInput = e => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleOnSubmit = e => {
        e.preventDefault();

        const { error } = schema.validate(formData);
        const errors = {};

        if (!error) {
            const product = {...formData, price: +formData.price};
            addProduct(product);
            navigate("/products");
        } else {
            const err = error.message[1];

            if (err === '1') errors.name = 'Name is required';
            else if (err === '2') errors.price = 'Price is required';            
        }
        
        setFormData(prev => ({ ...prev, errors }));
    }

  return (
    <div className='form__container'>
      <h3>Add your product</h3>
      <form onSubmit={handleOnSubmit} className='form'>
        <div className='input__field'>
          <label htmlFor="product-name">
            Product Name
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={changeInput}
            id="product-name"
            className='form__input'
            name="name"
          />
          <div>{formData.errors.name}</div>
        </div>
        <div className='input__field'>
          <label htmlFor="product-price">
            Product Price
          </label>
          <input
            type="number"
            value={formData.price}
            onChange={changeInput}
            id="product-price"
            className='form__input'
            name="price"
          />
          <div>{formData.errors.price}</div>
        </div>
        <div className='btn__container'>
            <button type="submit" className='submit__btn'>
                Add Product
            </button>
        </div>
      </form>
    </div>
  )
}
