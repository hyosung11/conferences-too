const express = require('express');
const morgan = require("morgan");

const app = express();

// Set view engine to Pug
app.set("views", "./views");
app.set('view engine', 'pug');

// Serve static files from public directory
app.use(express.static('public'));
app.use(morgan("common"));

// Create a new datastore
app.use((req, res, next) => {
  res.locals.store = new PgPersistence();
})

// Route handler for the root path
app.get("/", (req, res) => {
  // Render the 'layout' template with relevant data (optional)
  res.render("layout", { /* Pass any data to the template */ });
});

// ... other routes and middleware

// Start the server
app.listen(3000, 'localhost', () => {
  console.log("Server listening to port 3000.");
});
