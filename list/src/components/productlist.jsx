import React from "react";

function ProductList({ products }) {
  return (
    <div className="product-list">
      <h2>Products</h2>

      {products.map((product) => (
        <div className="product" key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>
          <p>Category: {product.category}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;