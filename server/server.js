import express from "express";
const app = express();
import devServer from "./devServer"; // hanya untuk development
devServer.compile(app); // hanya untuk development

// serve static file untuk react
import path from "path";
const CURRENT_WORKING_DIR = process.cwd();
app.use("/dist", express.static(path.join(CURRENT_WORKING_DIR, "dist")));

//untuk menyajikan html pada saat server express di akses pada path /
import html from "./../html";
app.get("/", (req, res) => {
  res.status(200).send(html());
});

//connect ke database mongo
import { MongoClient } from "mongodb";
const url = process.env.MONGODB_URI || "mongodb://localhost:27017/test";
MongoClient.connect(url, (err, db) => {
  console.log("Connected to MongoDB");
  db.close();
});

//untuk menjalankan server pada port 3000
let port = process.env.PORT || 3000;
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info("server running on port " + port);
});
