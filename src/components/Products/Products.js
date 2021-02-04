import React from 'react';
import { formatCurrency } from '../../util/formatCurrency';

const Products = ({ products }) => {
    const renderedProducts = products.map(product => (
        <li key={product._id}>
            <div className="products__product product">
                <a href={"#" + product._id} className="product__link">
                    <img src={product.image} alt={product.title} className="product__img" />
                    <p className="product__title">
                        {product.title}
                    </p>
                </a>
                <div className="product__price-container">
                    <div className="product__price-value">
                        { formatCurrency(product.price) }
                    </div>
                    <button className="product__price-btn btn">
                        Add To Cart
                    </button>
                </div>
            </div>
        </li>
    ))

    return (
            <ul className="products">
                {renderedProducts}
            </ul>
     );
}
 
export default Products;