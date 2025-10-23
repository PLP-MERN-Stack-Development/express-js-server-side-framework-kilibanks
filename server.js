// server.js - Starter Express server for Week 2 assignment

// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(bodyParser.json());

// Sample in-memory products database
let products = [
  {
    id: '1',
    name: 'Laptop',
    description: 'High-performance laptop with 16GB RAM',
    price: 1200,
    category: 'electronics',
    inStock: true
  },
  {
    id: '2',
    name: 'Smartphone',
    description: 'Latest model with 128GB storage',
    price: 800,
    category: 'electronics',
    inStock: true
  },
  {
    id: '3',
    name: 'Coffee Maker',
    description: 'Programmable coffee maker with timer',
    price: 50,
    category: 'kitchen',
    inStock: false
  }
];

// Root route
app.get('/', (req, res) => {
  res.send('Hello World');
});



// TODO: Implement the following routes:
// GET /api/products - Get all products
// GET /api/products/:id - Get a specific product
// POST /api/products - Create a new product
// PUT /api/products/:id - Update a product
// DELETE /api/products/:id - Delete a product

// Example route implementation for GET /api/products
app.get('/api/products', (req, res) => {
  res.json(products);
});
app.get("/api/products/:id", (req, res) => {

  res.json(products);
});
app.post('/api/products', (req, res) => {
  res.json(products);
});
app.put("/api/products/:id", (req, res) => {
  res.json(products);
});
app.delete("/api/products/:id", (req, res) => {
  res.json(products);
});



// TODO: Implement custom middleware for:
// - Request logging
const requestLogger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};
app.use(requestLogger);

// - Authentication
const authenticate = (req, res, next) => {
  // Dummy authentication logic
  const authHeader = req.headers['authorization'];  
// - Error handling
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
} ;
  if (authHeader === 'Bearer mysecrettoken') {
    next();
  } else {
    res.status(401).send('Unauthorized');
  } 
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Export the app for testing purposes
module.exports = app; 