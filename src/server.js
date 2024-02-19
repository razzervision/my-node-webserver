const express = require('express');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Import routes
routes(app);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});