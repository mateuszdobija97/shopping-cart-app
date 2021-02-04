import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Filter from "./components/Filter/Filter";
import Products from "./components/Products/Products";
import data from './data.json';

const App = () => {
  const [products, setProducts] = useState(data.products);
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const sortProducts = e => {
    const sortedProducts = products.slice();

    if (e.target.value === 'latest') sortedProducts.sort((a, b) => ( a._id > b._id ? 1 : -1 ));
    else if (e.target.value === 'highest') sortedProducts.sort((a, b) => (a.price > b.price ? -1 : 1));
    else if (e.target.value === 'lowest') sortedProducts.sort((a, b) => (a.price > b.price ? 1 : -1));

    setSort(e.target.value);
    setProducts(sortedProducts);
  }
  const filterProducts = e => {
    if(e.target.value === "") {
      setSize(e.target.value)
      setProducts(data.products)
    } else {
      setSize(e.target.value);
      setProducts(data.products.filter(product => (product.availableSizes.indexOf(e.target.value) >= 0)));
    }
  }
  const addToCart = product => {
    const _cartItems = cartItems.slice();
    console.log(_cartItems);
    let alreadyInCart = false;
    _cartItems.forEach(item => {
      if(item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if(!alreadyInCart) {
      _cartItems.push({ ...product, count: 1 })
      alreadyInCart = true;
    }
    setCartItems(_cartItems);
    console.log(_cartItems);
  }
  const removeFromCart = product => {
    const _cartItems = cartItems.slice();
    setCartItems(_cartItems.filter(_cartItem => _cartItem._id !== product._id))
  }

  return (
    <div className="grid-container">
      <header className="grid-container__header">
        <a href="/">Shopping Cart</a>
      </header>
      <main className="grid-container__main">
        <main className="main-products">
          <Filter 
            count={products.length} 
            size={size} 
            sort={sort}
            sortProducts={sortProducts}
            filterProducts={filterProducts}
             />
          <Products products={products} addToCart={addToCart} />
        </main>
        <aside className="aside-cart-items">
          <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
        </aside>      
      </main>
      <footer className="grid-container__footer">
        All rights is reserved.
      </footer>
    </div>
  );
};

export default App;
