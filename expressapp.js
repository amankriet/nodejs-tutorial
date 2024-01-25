import express from "express";
import { readFileSync } from "fs";

const port = process.env.PORT || 3002;
const app = express();

app.get("/", (req, res) => {
  const index = readFileSync("./index.html", "utf-8");
  res.end(index);
});

app.get("/about", (req, res) => {
  res.end(
    "<h1>About Me</h1><p>I am a Software Developer. My Profile:</p><ul>Location: Varanasi</ul><ul>Qualification: B.Tech (CSE)</ul><ul>Role: Android App Developer, Web Developer, Backend Developer"
  );
});

app.listen(port, () => {
  console.log(`Express app is listening on port ${port}`);
});
