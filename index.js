const express = require('express');
const morgan = require("morgan");
const path = require('path'); // For joining file paths

const app = express();

// Set view engine to Pug
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Serve static files from public directory
app.use(express.static('public'));
app.use(morgan("common"))

// Route handler for the root path
app.get("/", (req, res) => {
  // Render the 'layout' template with relevant data (optional)
  res.render("layout", { /* Pass any data to the template */ });
});

// ... other routes and middleware

// Start the server
app.listen(3000, () => console.log('Server listening on port 3000'));
