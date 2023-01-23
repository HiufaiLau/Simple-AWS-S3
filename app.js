import express from "express";
import cors from "cors";
import { generateUploadURL } from "./s3.js";

const app = express();
// const router = express.Router();
app.use(cors());

app.use(express.static("client"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "client/index.html"));
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
