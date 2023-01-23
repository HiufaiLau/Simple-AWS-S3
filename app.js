import express from "express";
import cors from "cors";
import { generateUploadURL } from "./s3.js";
import http from "http";
import fs from "fs";
// const http = require("http");
// const fs = require("fs");

const app = express();
const router = express.Router();
app.use(cors());

app.use(express.static("client"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "client/index.html"));
  //__dirname : It will resolve to your project folder.
});

app.get("/s3Url", async (req, res) => {
  const url = await generateUploadURL();
  res.send({ url });
  console.log("aws", url);
});

const allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");

  next();
};

app.listen(8000, () => console.log("listening on port 8000"));

// const port = 8000;

// const server = http.createServer(function (req, res) {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   fs.readFile("index.html", function (error, data) {
//     if (error) {
//       res.writeHead(404);
//       res.write("Error: File Not Found.");
//     } else {
//       res.write(data);
//     }
//     res.end();
//   });
//   //   res.write("Hello Node");
// });

// app.get("/s3Url", async (req, res) => {
//   const url = await generateUploadURL();
//   res.send({ url });
// });

// server.listen(port, function (error) {
//   if (error) {
//     console.log("Something went wrong", err);
//   } else {
//     console.log("Server listening on port " + port);
//   }
// });
