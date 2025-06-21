
# 📦 Inventory Management RESTful API

This API provides CRUD operations for managing inventory.

## Base URL
`http://localhost:3000`

## Endpoints

- `GET /products` – List all products
- `GET /products/:id` – View single product
- `POST /products` – Add new product
- `PUT /products/:id` – Update product
- `DELETE /products/:id` – Delete product

## Sample Product JSON
```json
{
  "name": "Notebook",
  "category": "Stationery",
  "price": 60,
  "quantity": 25
}
```

## Run Locally
```bash
npm init -y
npm install express cors
node server.js
```
