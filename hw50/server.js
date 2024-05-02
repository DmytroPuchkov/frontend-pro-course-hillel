require('dotenv').config();
const express = require("express");
const { readFile } = require("./helpers/index");

const app = express();
const port = process.env.PORT;

app.listen(process.env.PORT, () => {
  console.log(`App, port: ${port}`);
});

app.get("/", (req, res) => {
  res.json("ok")
});

app.get("/products", (req, res) => {
  readFile({
    url: "./model/data.json",
    callback: (error, data) => {
      if (error) {
        res.status(500).json({ ...error, message: "Ooops" });
      }

      const { stock = null, minPrice = null, maxPrice = null, productName = null } = req.query;
      let products = JSON.parse(data);

      // Є на складі, немає, всі
      if (stock) {
        const flag = stock === 'true';

        if (stock !== 'all') {
          products = products.filter((product) => product.productStock === flag);
        }
      }

      // Діапазон від - до
      if (minPrice || maxPrice) {
        products = products.filter(product => {
          const price = parseFloat(product.productPrice);
          
          return (!minPrice || price >= parseFloat(minPrice)) && (!maxPrice || price <= parseFloat(maxPrice));
        });
      }

      // Можна комбінувати ?minPrice=2000&maxPrice=3500&stock=true

      // Отримати всі товари в назвах яких присутній параметр productName
      if (productName) {
        products = products.filter(product => product.productName.toLowerCase().includes(productName.toLowerCase()));
      }

      res.json(products);
    },
  });
});

app.get("/products/:id", (req, res) => {
  readFile({
    url: "./model/data.json",
    callback: (error, data) => {
      if (error) {
        res.status(500).json({ ...error, message: "Ooops" });
      }

      const products = JSON.parse(data);

      // Отримати товар за конкретним id - отримаємо лише 1 товар
      const product = products.find(el => el.productId === parseInt(req.params.id));

      res.json(product);
    },
  });
});

app.get("*", (req, res) => {
  res.status(404).send("Not found");
});