import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "mernproject",
});

app.get("/", (req, res) => {
  res.json("hiii amin :)");
});

app.get("/products", (req, res) => {
  const q = "SELECT * FROM products";
  db.query(q, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});

app.get("/Cards", (req, res) => {
  const q = "SELECT * FROM cardcatrgory";
  db.query(q, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});

app.post("/products", (req, res) => {
  const q =
    "INSERT INTO `products`(`name`,`cover` ,`category`, `descreption`, `discount`, `price`) VALUES (?)";
  const valuse = [
    req.body.name,
    req.body.cover,
    req.body.category,
    req.body.descreption,
    req.body.discount,
    req.body.price,
  ];
  db.query(q, [valuse], (err, res) => {
    if (err) {
      return res.json(err);
    }
    return res.json("کالای مورد نظر با موفقیت اضافه شد !");
  });
});

app.get("/cart", (req, res) => {
  const q = "SELECT * FROM cart";
  db.query(q, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});

app.post("/cart", (req, res) => {
  const q =
    "INSERT INTO `cart` (`name`,`category`,`price`) VALUES ( name, category, price)";
  db.query(q, (err, res) => {
    if (err) {
      return res.json(err);
    }
    return res.json("کالای مورد نظر با موفقیت اضافه شد !");
  });
});

app.listen(1111, () => {
  console.log("this connected is successfuly");
});
