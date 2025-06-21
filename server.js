
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let inventory = [
  { id: 1, name: "Laptop", category: "Electronics", price: 70000, quantity: 10 },
  { id: 2, name: "Pen", category: "Stationery", price: 10, quantity: 100 },
];

const findProduct = (id) => inventory.find((item) => item.id === parseInt(id));

app.get("/products", (req, res) => res.status(200).json(inventory));

app.get("/products/:id", (req, res) => {
  const product = findProduct(req.params.id);
  if (!product) return res.status(404).json({ error: "Product not found" });
  res.json(product);
});

app.post("/products", (req, res) => {
  const { name, category, price, quantity } = req.body;
  if (!name || !category || isNaN(price) || isNaN(quantity)) {
    return res.status(400).json({ error: "Invalid input data" });
  }
  const newProduct = {
    id: inventory.length ? inventory[inventory.length - 1].id + 1 : 1,
    name, category, price, quantity
  };
  inventory.push(newProduct);
  res.status(201).json({ message: "Product added", product: newProduct });
});

app.put("/products/:id", (req, res) => {
  const product = findProduct(req.params.id);
  if (!product) return res.status(404).json({ error: "Product not found" });
  const { name, category, price, quantity } = req.body;
  if (name !== undefined) product.name = name;
  if (category !== undefined) product.category = category;
  if (price !== undefined) product.price = price;
  if (quantity !== undefined) product.quantity = quantity;
  res.json({ message: "Product updated", product });
});

app.delete("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = inventory.findIndex((item) => item.id === id);
  if (index === -1) return res.status(404).json({ error: "Product not found" });
  const removed = inventory.splice(index, 1);
  res.json({ message: "Product deleted", removed });
});

app.listen(PORT, () => {
  console.log(`✅ Inventory API running at http://localhost:${PORT}`);
});
