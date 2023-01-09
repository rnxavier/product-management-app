import express from "express";

// npx nodemon src/server.js

let products = [
  {
    productId: 2,
    productName: "Apple iPad",
    productCode: "iO2-00234",
    releaseDate: "March 18, 2022",
    description: "Latest release tablet",
    price: 849.99,
    starRating: 3.8,
    imageUrl: "../assets/ipad.jpeg",
  },
  {
    productId: 5,
    productName: "Apple iMac",
    productCode: "iO5-00487",
    releaseDate: "June 5, 2021",
    description: "Desktop monitor with built-in PC",
    price: 1299,
    starRating: 4.2,
    imageUrl: "../assets/imac.jpeg",
  },
];

const app = express();
app.use(express.json());

app.get("/products", (req, res) => {
  res.send(products);
});

app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});
