import React, { useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Laptop",
      price: 55000,
      category: "Electronics",
    },
    {
      id: 2,
      name: "Mobile Phone",
      price: 25000,
      category: "Electronics",
    },
  ]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const addProduct = () => {
    if (name === "" || price === "" || category === "") {
      alert("Please enter all details");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: name,
      price: price,
      category: category,
    };

    setProducts([...products, newProduct]);

    setName("");
    setPrice("");
    setCategory("");
  };

  return (
    <div className="product-container">
      <h2>Add Product</h2>

      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Product Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        type="text"
        placeholder="Product Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <button onClick={addProduct}>Add Product</button>

      <h2>Product List</h2>

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