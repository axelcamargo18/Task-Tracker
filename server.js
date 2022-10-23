import fs from "fs";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
// import { AddEvents, DisplayTodos } from "./app.js";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(__dirname + "/"));

app.get("/", (req, res) => {
  fs.readFile("./index.html", (err, data) => {
    // AddEvents();
    // DisplayTodos();
    res.write(data);
    res.end();
  });
});

app.get("/add", (req, res) => {
    fs.readFile("./index.html", (err, data) => {
        // AddEvents();
        // DisplayTodos();
        res.write(data);
        res.end();
    });
});

app.get("/", (req, res) => {
fs.readFile("./index.html", (err, data) => {
    // AddEvents();
    // DisplayTodos();
    res.write(data);
    res.end();
});
});

app.listen(4000, (err) => {
  if (err) return err;
  console.log(`running on port 4000..`);
});
