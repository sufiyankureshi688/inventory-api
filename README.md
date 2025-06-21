
# 🛠 Inventory Management API Project

This is a Node.js + Express-based RESTful API for managing inventory items, with a frontend interface using HTML + JavaScript.

## Features

- View, Add, Edit, and Delete products
- Frontend interface via browser (`client.html`)
- Live testing via curl or browser

## Run Locally

```bash
npm install
node server.js
```

Then open `client.html` using:

```bash
python3 -m http.server 5500
# visit http://localhost:5500/client.html
```

## Example API Usage with curl

```bash
curl http://localhost:3000/products
curl -X POST http://localhost:3000/products -H "Content-Type: application/json" -d '{"name":"Book", "category":"Stationery", "price":50, "quantity":5}'
```

---

## Author

Sufiyan Kureshi | Task 2 – Inventory API Project
