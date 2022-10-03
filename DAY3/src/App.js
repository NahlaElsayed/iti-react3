import './App.css';
import { Routes, Route } from "react-router-dom";
import { NavBar as Nav } from './NavBar';
import { Products } from './Products';
import { useState } from 'react';
import { ProductPage } from './ProductPage';
import { FavoriteItems } from './FavoriteItems';
import { AddProduct } from './AddProduct';
import { EditProduct } from './EditProduct';

const App = () => {
  const [products, setProducts] = useState(productList);
  const [favorites,  setFavorites] = useState(favoriteItems);

  const increasePrice = productId => {
    const newProducts = [...products];
    newProducts.find(item => item.id === productId).price += 1;
    setProducts(newProducts);
  }

  const decreasePrice = productId => {
    const newProducts = [...products];
    newProducts.find(item => item.id === productId).price -= 1
    setProducts(newProducts);
  }

  const addToFavorites = productId => {
    let newFavorites = [...favorites];
    const favoriteItem = products.find(item => item.id === productId);
    newFavorites = [...newFavorites, favoriteItem];
    setFavorites(newFavorites);
  }

  const getProductById = productId => {
    return products.find(item => +item.id === +productId);
  }

  const addProduct = product => {
    const newProducts = [...products];

    const lastId = newProducts[newProducts.length - 1].id;

    newProducts.push({ ...product, id: Number(lastId) + 1 });
    setProducts(newProducts);
  }

  const editProduct = product => {
    const newProducts = [...products];
    const index = newProducts.findIndex(item => item.id === product.id);
    
    newProducts[index] = product;
    setProducts(newProducts);
  }

  const deleteProduct = productId => {
    let newProducts = [...products];
    newProducts = newProducts.filter(product => product.id !== productId);
    setProducts(newProducts);
  }

  return (
    <>
      <Nav />
      
      <Routes>
          <Route path='/' element={<h1>Home</h1>} />
          <Route path='/about' element={<h1>About</h1>} />
          <Route path='*' element={<h1>ERROR: 404. Page Not Found.</h1>} />
          <Route path='/products/:productId' element={<ProductPage getProductById={getProductById} />} />
          <Route path='/favorites' element={<FavoriteItems favorites={favorites} />} />
          <Route path='/add' element={<AddProduct addProduct={addProduct} />} />
          <Route path='/edit/:productId'
            element={
              <EditProduct
                editProduct={editProduct} 
                getProductById={getProductById}
          />} />
          <Route path='/products'
            element={
              <Products
              products={products}
              increasePrice={increasePrice}
              decreasePrice={decreasePrice}
              addToFavorites={addToFavorites}
              deleteProduct={deleteProduct}
          />} />
      </Routes>
    </>
  )
}

const productList = [
  {id: '1', name: 'Product1', price: 3520},
  {id: '2', name: 'Product2', price: 1562},
  {id: '3', name: 'Product3', price: 3428},
  {id: '4', name: 'Product4', price: 8597},
  {id: '5', name: 'Product5', price: 1999}
]

const favoriteItems = [];

export default App;