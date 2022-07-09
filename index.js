const express = require("express");

const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: "true" }));

const productos = [
  {
    name: "Samsung s20",
    price: "200",
    url: "https://images.samsung.com/is/image/samsung/assets/ar/s20-buy/S20-FE_Navy_SKUimage_MO-img.jpg",
  },
  {
    name: "Martillo bosh",
    price: "240",
    url: "https://arcomaquinarias.com/producto/multimedia/tqXLDAU91o.jpg",
  },
];

app.get("/", (req, res) => {
  res.render("vista.ejs", { productos });
});

app.post("/addProd", (req, res) => {
  productos.push(req.body);
  console.log(req.body, "its added to personas");
  res.render("vista.ejs", { productos });
});

app.listen(8080);
