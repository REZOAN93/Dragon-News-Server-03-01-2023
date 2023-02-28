const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());

const categories = require("./categories.json");
const news = require("./news.json");

app.get("/", (req, res) => {
  res.send(news);
});

app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const detailsNews = news.find((n) => n._id === id);
  res.send(detailsNews);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;

  if (id == 08) {
    res.send(news);
  } else {
    const categoryNews = news.filter((n) => n.category_id === id);
    res.send(categoryNews);
  }
});

app.get("/category", (req, res) => {
  res.send(categories);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
