import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Products from "./components/Products/Products";
import data from './data.json';

const App = () => {
  const [products, setProducts] = useState(data.products);
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");

  return (
    <div className="grid-container">
      <header className="grid-container__header">
        <a href="/">Shopping Cart</a>
      </header>
      <main className="grid-container__main">
        <main className="main-products">
          <Products products={products} />
        </main>
        <aside className="aside-cart-items">
          <Cart />
        </aside>      
      </main>
      <footer className="grid-container__footer">
        All rights is reserved.
      </footer>
    </div>
  );
};

export default App;
