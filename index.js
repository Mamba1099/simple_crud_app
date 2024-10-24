const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route");
// middleware
const app = express();
app.use(express.json());
// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from node API server");
});
mongoose
  .connect(
    "mongodb+srv://mamba:mamba1234@backend.pdeb7.mongodb.net/?retryWrites=true&w=majority&appName=Backend"
  )
  .then(() => {
    console.log("Connected to the database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
